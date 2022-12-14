import ReadTeamData from "./ReadTeamData";
import {rcb} from "../data/team";

const readTeamData = new ReadTeamData();

let teamValidation = () => {
    let teamData = readTeamData.getTeamDetails(rcb);
    console.assert(teamData.foreignPlayer <= 4, `Foreign players requirement is not fulfilled, current size of foreign players in team are: ${teamData.foreignPlayer}`);
    console.assert(teamData.wicketKeeper >= 1, `Wicketkeeper requirement is not fulfilled, current size of weeketkeepers in team are: ${teamData.wicketKeeper}`);
    console.assert(teamData.totalBidForForeignPlayer<=35, `You are spending more than 35 crores in purchasing foreign players however, your total current bid for the foreign players is: ${teamData.totalBidForForeignPlayer}`);
}

teamValidation();