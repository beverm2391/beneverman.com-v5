import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { CatmullRomCurve3, Vector3, Color, Points, PointsMaterial, BufferGeometry, Float32BufferAttribute } from 'three';

const AnimatedTube = () => {
    const points = useMemo(() => [
        [68.5, 185.5],
        [1, 262.5],
        [270.9, 281.9],
        [345.5, 212.8],
        [178, 155.7],
        [240.3, 72.3],
        [153.4, 0.6],
        [52.6, 53.3],
        [68.5, 185.5]
    ].map(([x, z]) => new Vector3(x, 0, z)), []);

    const path = useMemo(() => new CatmullRomCurve3(points), [points]);
    const tubeGeometry = useMemo(() => {
        const tubeDetail = 500;
        const circlesDetail = 10;
        const radius = 5;
        const frames = path.computeFrenetFrames(tubeDetail, true);
        const vertices = [];
        const colors = [];

        for (let i = 0; i < tubeDetail; i++) {
            const normal = frames.normals[i];
            const binormal = frames.binormals[i];
            const index = i / tubeDetail;
            const p = path.getPointAt(index);

            for (let j = 0; j < circlesDetail; j++) {
                const angle = (j / circlesDetail) * Math.PI * 2;
                const sin = Math.sin(angle);
                const cos = -Math.cos(angle);

                const normalPoint = new Vector3(cos * normal.x + sin * binormal.x, cos * normal.y + sin * binormal.y, cos * normal.z + sin * binormal.z).multiplyScalar(radius);
                const position = p.clone().add(normalPoint);

                vertices.push(position.x, position.y, position.z);
                const color = new Color(`hsl(${index * 360 * 4}, 100%, 50%)`);
                colors.push(color.r, color.g, color.b);
            }
        }

        const geometry = new BufferGeometry();
        geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));
        geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
        return geometry;
    }, [path]);

    const material = new PointsMaterial({
        size: 1,
        sizeAttenuation: true,
        vertexColors: true
    });

    return <points args={[tubeGeometry, material]} />;
};

const CameraAnimator = ({ path } : { path: CatmullRomCurve3 }) => {
    const { camera } = useThree();
    const percentageRef = useRef(0);

    useFrame(() => {
        let percentage = percentageRef.current;

        percentage += 0.0005;
        const p1 = path.getPointAt(percentage % 1);
        const p2 = path.getPointAt((percentage + 0.01) % 1);

        camera.position.set(p1.x, p1.y, p1.z);
        camera.lookAt(p2.x, p2.y, p2.z);

        percentageRef.current = percentage;
    });

    return null;
};

const InfiniteTube = () => {
    const points = useMemo(() => [
        [68.5, 185.5],
        [1, 262.5],
        [270.9, 281.9],
        [345.5, 212.8],
        [178, 155.7],
        [240.3, 72.3],
        [153.4, 0.6],
        [52.6, 53.3],
        [68.5, 185.5]
    ].map(([x, z]) => new Vector3(x, 0, z)), []);

    const path = useMemo(() => new CatmullRomCurve3(points), [points]);

    return (
        <div className='h-screen w-screen'>
            <Canvas camera={{ position: [0, 0, 400], fov: 50 }}>
                <AnimatedTube />
                <CameraAnimator path={path} />
            </Canvas>
        </div>
    );
};

export default InfiniteTube;
