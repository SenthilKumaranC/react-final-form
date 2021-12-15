
const FieldsWrapper = (props: any) => {
    const { children } = props;
    return <>
        <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
            {children}
        </div>
    </>
}

export default FieldsWrapper