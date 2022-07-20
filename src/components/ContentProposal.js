import React from "react";
import "../styles/ContentProposal.css";

export default function ContentProposal() {
  return (
    <div className="OutBg">
        <div className="CenterBox">
          <form>
            <p className="EventPHeading">Event Proposal</p>
            <div className='Year'>
              <label>Year</label>
              <div className="YearBox">
              <input type="text" name="Year" />
              </div>
            </div>

            <div className="EventName">
              <label>Event Name</label>
              <div className="EventNBox">
              <input type="text" name="EventName" />
              </div>
            </div>

            <div className="FromDate">
              <label>From Date</label>
              <div className="FromDBox">
              <input type="text" name="FromDate" />
              </div>
            </div>

            <div className="ToDate">
              <label>To Date</label>
              <div className="ToDBox">
              <input type="text" name="ToDate" />
              </div>
            </div>

            <div className="Venue">
              <label>Venue</label>
              <div className="VenueBox">
              <input type="text" name="Venue" />
              </div>
            </div>

            <div className="FromTime">
              <label>From Time</label>
              <div className="FromTBox">
              <input type="text" name="FromTime" />
              </div>
            </div>

            <div className="ToTime">
              <label>To Time</label>
              <div className="ToTBox">
              <input type="text" name="ToTime" />
              </div>
            </div>
            
            <div className="ExpPC">
              <label>Expected Participant Count</label>
              <div className="ExpPCBox">
              <input type="text" name="ExpC" />
              </div>
            </div>

            <div className="ChiefGuest">
              <label>Chief Guest</label>
              <div className="ChiefGBox">
              <input type="text" name="ChiefGuest" />
              </div>
            </div>

            <div className="Designation">
              <label>Designation</label>
              <div className="DesigBox">
              <input type="text" name="Designation" />
              </div>
            </div>

            <div className="Address">
              <label>Address</label>
              <div className="AddressBox">
              <input type="text" name="Address" />
              </div>
            </div>

            <div className="President">
              <label>President</label>
              <div className="PresidentBox">
              <input type="text" name="President" />
              </div>
            </div>

            <div className="ExpE">
              <label>Expected Expense</label>
              <div className="ExpEBox">
              <input type="text" name="ExpE"/>
              </div>
            </div>

            <div className="TotAmtA">
              <label>Total Amount Allocated by SU</label>
              <div className="TotAmtABox">
              <input type="text" name="TotAmtA" />
              </div>
            </div>

            <div className="TotAmtS">
              <label>Total amount spent on the day of request</label>
              <div className="TotAmtSBox">
              <input type="text" name="TotAmtS" />
              </div>
            </div>

            <div className="Comments">
              <label>Comments</label>
              <div className="CommentsBox">
              <input type="text" name="Comments"/>
              </div>
            </div>

            <div className="EventDesc">
              <label>Event Description</label>
              <div className="EventDescBox">
                <input type="text" name="EventDesc"/>
              </div>
            </div>
          </form>
        </div>
    </div>
  )
}