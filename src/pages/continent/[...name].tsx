import { Box } from "@chakra-ui/react";
import { ContinentBanner } from "../../components/ContinentBanner";
import { Header } from "../../components/Header";
import { HundredCities } from "../../components/HundredCities";
import { Introduction } from "../../components/Introduction";

export default function Continent() {
    return(
        <Box>
            <Header isContinentPage/>
            <ContinentBanner/>
            <Introduction/>
            <HundredCities/>
        </Box>
    )
}