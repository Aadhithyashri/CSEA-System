import React from 'react'
import "../styles/Content.css"
import logo from "../img/csealogo.png"
export default function Content() {
  return (
    <div className='OutBg'>
        <div className='CenterBox'>
            <div className='Logo'>
                <img src= {logo} alt="psg" width="650" height="300"/>
            </div>
            <div className='ImpAnn'>
              <h2>
                Important Announcements
              </h2>
              <ul className='impann'>
                  <li>Lorem ipsum dolor sit amet. Non commodi nihil eos nihil quia rem suscipit rerum.</li>
                  <li>Lorem ipsum dolor sit amet. Non commodi nihil eos nihil quia rem suscipit rerum.</li>
                  <li>Lorem ipsum dolor sit amet. Non commodi nihil eos nihil quia rem suscipit rerum.</li>
                  <li>Lorem ipsum dolor sit amet. Non commodi nihil eos nihil quia rem suscipit rerum.</li>
                  <li>Lorem ipsum dolor sit amet. Non commodi nihil eos nihil quia rem suscipit rerum.</li>
              </ul>
              <br></br>
              <div className='button-container'>
                <div>
                  <button className='EAnn'> Edit Announcement </button>
                </div>
                <div>
                  <button className='DAnn'> Delete Announcement </button>
                </div>
              </div>
            </div>
            <br></br>
            <div className='Mem-Fac'>
              <h2>
                Members & Faculty
              </h2>
              <ul className='memfac'>
                  <li>First Last | Department | Year | Delegation</li>
                  <li>First Last | Department | Year | Delegation</li>
                  <li>First Last | Department | Year | Delegation</li>
                  <li>First Last | Department | Year | Delegation</li>
                  <li>First Last | Department | Year | Delegation</li>
            </ul>
            <br></br>
            <div className='button-container'>
                <div>
                  <button className='EMem'> Edit Member </button>
                </div>
                <div>
                  <button className='DMem'> Delete Member </button>
                </div>
              </div>
            </div>

        </div>
    </div>
  )
}
