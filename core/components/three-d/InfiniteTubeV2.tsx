import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { CatmullRomCurve3, Vector3, TubeGeometry, MeshBasicMaterial } from 'three';

// Assumes CameraAnimator is adjusted to accept props
const CameraAnimator = ({ path } : { path: CatmullRomCurve3 }) => {
    const { camera } = useThree();
    const percentageRef = useRef(0);

    useFrame(() => {
        let percentage = percentageRef.current;

        // Increment the path-traversal percentage
        percentage += 0.0005;
        const p1 = path.getPointAt(percentage % 1);
        const p2 = path.getPointAt((percentage + 0.01) % 1);

        // Update camera position and orientation
        camera.position.set(p1.x, p1.y, p1.z);
        camera.lookAt(p2.x, p2.y, p2.z);

        // Store the updated percentage
        percentageRef.current = percentage;
    });

    return null;
};

const AnimatedTube = ({ path } : { path: CatmullRomCurve3 }) => {
    const tubeGeometry = useMemo(() => new TubeGeometry(
        path, // path
        100, // tubularSegments
        2, // radius
        120, // radialSegments
        false // closed
    ), [path]);

    const material = useMemo(() => new MeshBasicMaterial({
        color: 0x000000, // Black color
        wireframe: true // Wireframe enabled
    }), []);

    return <mesh geometry={tubeGeometry} material={material} />;
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
        <div className='absolute h-screen w-screen'>
            <Canvas camera={{ fov: 20, position: [0, 0, 10] }}>
                <AnimatedTube path={path} />
                <CameraAnimator path={path} />
            </Canvas>
        </div>
    );
};

export default InfiniteTube;
