const updateList = (list, item, idx) => {
    if (item.count === 0) {
        return [
            ...list.slice(0, idx),
            ...list.slice(idx + 1)
        ]
    }

    if (idx === -1) {
        return [
            ...list,
            item
        ]
    }

    return [
        ...list.slice(0, idx),
        item,
        ...list.slice(idx + 1)
    ]
}

export default updateList
