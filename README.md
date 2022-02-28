# BlueStack-Campaign
## Test Cases

| Description  | Execution Steps                                    | Expected Output |
| ------- | --------------------------------------- | ------- |
| Check Schdule Update for upcoming campaign | Click Schedule again and select future date |   The campaign should move to upcoming campaign |
| Check Schdule Update for past campaign | Click Schedule again and select past date |   The campaign should move to past campaign |
| Check Schdule Update for live campaign | Click Schedule again and select todays date |   The campaign should move to live campaign (Only today campaign comes in live campaigns) |
| State maintains in refresh | Update any schedule and refresh the browser  | The updates should be visible after refresh
| Price detail comes in a separate modal | Click price for any campaign  | A separate dialog should appear for the price details
