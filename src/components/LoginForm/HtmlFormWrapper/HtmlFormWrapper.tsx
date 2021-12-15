import { Card, CardContent } from "@mui/material";

const HtmlFormWrapper = (props: any) => {
    const { children } = props;
    return <>
        <Card style={{width:"45%",height:"41%"}}>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    </>
}

export default HtmlFormWrapper;