import ReadTeamData from "./ReadTeamData";
import {rcb} from "../data/team";

const readTeamData = new ReadTeamData();

let teamValidation = () => {
    let teamData = readTeamData.getTeamDetails(Object(rcb));
    console.assert(teamData.foreignPlayer <= 4, `Foreign players requirement is not fulfilled, current size of foreign players in team are: ${teamData.foreignPlayer}`);
    console.assert(teamData.wicketKeeper == 1, `Wicketkeeper requirement is not fulfilled, current size of weeketkeepers in team are: ${teamData.wicketKeeper}`);
}

teamValidation();