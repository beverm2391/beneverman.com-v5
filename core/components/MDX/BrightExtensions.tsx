import { BrightProps } from "bright"
import { CopyButton } from "./CopyButton"

/** @type {import("bright").Extension} */
export const CustomBlock = {
    name: "CustomBlock",
    // Pre: CusotmPre,
    // Root: CustomRoot,
    TitleBarContent: CustomTitleBarContent,
    // Tab: CustomTab,
    // TabContent: MyTab,
}

function CusotmPre() {
    return <pre></pre>
}

function CustomRoot() {
    return <div></div>
}

function CustomTitleBarContent() {
    return (
        <div className="bg-blue-500 w-full p-2">
            stuff
            <CopyButton value="stuff" />
        </div>
    )
}

function CustomTab() {
    return <div></div>
}

function CustomTabContent() {
    return <div></div>
}


/** @type {import("bright").BrightProps["TabContent"]} */
function MyTab(props: BrightProps) {
    const { title, colors } = props

    //   const { svg, color } =
    //     colors.colorScheme === "dark"
    //       ? getDarkIcon(title)
    //       : getLightIcon(title)
    //   const __html = svg.replace(/svg/, `svg fill='${color}'`)
    return (
        <div className="flex items-center h-6 ml-2 bg-red-500">
            <span
                // dangerouslySetInnerHTML={{ __html }}
                className="inline-block h-8 w-8 -mx-2"
            />
            {title}
        </div>
    )
}