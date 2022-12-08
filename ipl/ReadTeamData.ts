#!/usr/bin/env ts-node-script
import { rcb } from "../data/team";
class ReadTeamData {
    getTeamDetails(team: any) {
        let teamDetails = {
            "foreignPlayer": 0,
            "indianPlayer": 0,
            "wicketKeeper": 0,
            "batsman": 0,
            "bowler": 0,
            "allRounder": 0
        }
        for (const [key, value] of Object.entries(team.player)) {
            for (const [key1, value1] of Object.entries(value)) {
                if (key1 == "country") {
                    if (value1 != "India") {
                        teamDetails.foreignPlayer++;
                    } else if (value1 == "India") {
                        teamDetails.indianPlayer++;
                    }
                }
                if (key1 == "role") {
                    if (value1 == "Wicket-keeper") {
                        teamDetails.wicketKeeper++;
                    } else if (value1 == "Batsman") {
                        teamDetails.batsman++;
                    } else if (value1 == "Bowler") {
                        teamDetails.bowler++;
                    }else if(value1 == "All-Rounder"){
                        teamDetails.allRounder++;
                    }
                }
            }
        }
        return teamDetails;
    }
}
export default ReadTeamData;