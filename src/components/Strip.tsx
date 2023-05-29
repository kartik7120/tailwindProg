interface Props {
    name: string,
    color: string
}

export default function Strip(props: Props) {

    return (
        <div className={"bg-success text-xs w-28 text-center rounded-sm absolute top-0 left-8"}>
            {props.name}
        </div>
    )
}
