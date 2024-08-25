import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Tooltip } from "@chakra-ui/react";

type InfoTooltipProps = {
    text: string;
}

export default function InfoTooltip({
    text
}: InfoTooltipProps) {
    return (
        <Tooltip placement='top' label={text}>
            <InfoOutlineIcon />
        </Tooltip>
    )
}