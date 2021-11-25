import React from "react"
import BreadCrumbCollapser from "../utils/breadCrumbCollapser"
import useBreadCrumb from "../utils/useBreadCrumb"
import "./breadcrumbs.css"

const BreadCrumbItem = ({ children, ...props }) => (
    <li className='breadcrumb-item' {...props}>
        {children}
    </li>
)

const BreadCrumbSeparator = ({ children, ...props }) => (
    <li className='breadcrumb-separator' {...props}>
        {children}
    </li>
)

const toBreadCrumbItem = (child, index) => (
    <BreadCrumbItem key={`breadcrumb_item${index}`}> {child}</BreadCrumbItem >
)

const withSeparator = (lastIndex) => (acc, child, index) => {
    const notLast = index < lastIndex
    if (notLast) {
        acc.push([
            child,
            <BreadCrumbSeparator key={`breadcrumb_sep${index}`} />,
        ])
    } else {
        acc.push(child)
    }
    return acc
}

const withCollapse = ({
    itemsBefore,
    itemsAfter,
    max,
    children,
    totalItems,
    open,
}) => [
        ...children.slice(0, itemsBefore),
        <BreadCrumbCollapser
            title='Expand'
            key='collapsed-seperator'
            onClick={open}
        />,
        ...children.slice(totalItems - itemsAfter, totalItems),
    ]

const BreadCrumb = ({ separator, collapse = {}, ...props }) => {
    let children = React.Children.toArray(props.children)

    const { expanded, open } = useBreadCrumb()

    const { itemsBefore = 1, itemsAfter = 1, max = 4 } = collapse

    const totalItems = children.length
    const lastIndex = totalItems - 1

    children = children
        .map(toBreadCrumbItem)
        .reduce(withSeparator(lastIndex, separator), [])

    if (!expanded || totalItems <= max) {
        children = withCollapse({
            itemsBefore,
            itemsAfter,
            max,
            children,
            totalItems,
            open,
        })
    }

    return <ol>{children}</ol>
}

export default BreadCrumb