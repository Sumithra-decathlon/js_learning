#!/usr/bin/env ts-node-script
import { rcb } from "../data/team";
class ReadTeamData {
    getTeamDetails(team: Object) {
        let teamDetails = {
            "foreignPlayer": 0,
            "indianPlayer": 0,
            "wicketKeeper": 0,
            "batsman": 0,
            "bowler": 0,
            "allRounder": 0,
            "totalBidForForeignPlayer": 0
        }
        for (const [key, value] of Object.entries(Object(team).player)) {
            if (Object(value).country != "India") {
                teamDetails.foreignPlayer++;
            } else if (Object(value).country == "India") {
                teamDetails.indianPlayer++;
            }
            if (Object(value).role == "Wicket-keeper") {
                teamDetails.wicketKeeper++;
            } else if (Object(value).role == "Batsman") {
                teamDetails.batsman++;
            } else if (Object(value).role == "Bowler") {
                teamDetails.bowler++;
            } else if (Object(value).role == "All-Rounder") {
                teamDetails.allRounder++;
            }
            if (Object(value).country != "India") {
                teamDetails.totalBidForForeignPlayer += Number(Object(value).price_in_crores);
            }
        }
        return teamDetails;
    }
}
export default ReadTeamData;