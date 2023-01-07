import React, { useEffect } from 'react'

import './Style.css'
import expedia from './assets/expediaHeader.png'

import pre from './assets/predesign.png'
import early from './assets/early.png'
import mid from './assets/mid.png'
import late from './assets/late.png'

import interest1 from './assets/snack-interest1.png'
import interest2 from './assets/snack-interest2.png'

import website from './assets/website-update copy.mov'



import email from './assets/Email.png'
import phone from './assets/phone.png'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'




function Expedia() {
  useEffect(() => {
    document.title = "Expedia Redesign"
  }, [])

  return (
    <div className="work-outer-container">
      <div style={{alignItems: "center"}}>
        <img src={expedia} alt="expedia" className='work-header'/>
      </div>
      <header className='work-inner-container'>
        <div className='work-text-container'>
          <p className='amikoReg work-paragraph-text'>
            <a className='work-title fatFace'>HCI Researcher & Designer </a>
            September - December 2022
          </p>
        </div>

        <div className='work-text-container'>
          <p className='work-subtitle amikoBold'>OVERVIEW: PRODUCT</p>
        </div>
        <div className='text-container'>
          <p className='work-paragraph-text amikoReg'>
            <a className='amikoBold'>Expedia</a> is a travel booking website that compiles both flights & accommodations, eliminating
            the hassle of using multiple platforms when planning your trip!</p>
        </div>

        {/* tasks */}
        <div className='work-text-container'>
          <p className='work-subtitle amikoBold'>OVERVIEW: TASKS</p>
        </div>
        <div className='work-text-container'>
          <p className='work-paragraph-text amikoBold'>
            PURPOSE: <a className='work-paragraph-text amikoReg'>Acadmeic Project</a>
            <br></br>
            GOAL: <a className='work-paragraph-text amikoReg'>Redesign Expedia to support better filtering usability</a>
            <br></br>
            TIME: <a className='work-paragraph-text amikoReg'>4 months</a>
            <br></br>
            ROLE: <a className='work-paragraph-text amikoReg'>UX researcher, UI/UX designer, prototyping, report writer</a>
            <br></br>
            TOOLS: <a className='work-paragraph-text amikoReg'>Expedia, Figma, usability studies</a>
          </p>
        </div>

        {/* design stages */}
        <div className='work-text-container'>
          <p className='work-subtitle amikoBold'>DESIGN STAGES
          <br></br>
          <div className='center-container' style={{padding: "0"}}>
            <div className='design-stage-outer'>
              <div className='design-stage-menu'>
                <button class="design-stage-item" onclick="openCity('London')">PREDESIGN</button>
                <button class="design-stage-item" onclick="openCity('Paris')">EARLY DESIGN</button>
                <button class="design-stage-item" onclick="openCity('Tokyo')">MID DESIGN</button>
                <button class="design-stage-item" onclick="openCity('Tokyo')">LATE DESIGN</button>
              </div>
            <br></br>
              <img src={pre} alt="predesign" className='circle'/>
              <div className='design-stage-inner'>
                <a className='work-paragraph-text amikoReg'>understand problem based on users' needs</a>
                <br></br>
                <a className='work-paragraph-text amikoReg'>observation & interviews</a>
                <br></br>
                <a className='work-paragraph-text amikoReg'>--> requirements</a>
              </div>
            </div>
            <div className='design-stage-outer'>
              <img src={early} alt="earlydesign" className='circle'/>
              <div className='design-stage-inner'>
                <a className='work-paragraph-text amikoReg'>explore problems & contexts of use</a>
                <br></br>
                <a className='work-paragraph-text amikoReg'>conceptual models, lo-fi prototypes</a>
                <br></br>
                <a className='work-paragraph-text amikoReg'>--> design approach confirmed</a>
              </div>
            </div>
            <div className='design-stage-outer'>
              <img src={mid} alt="mid" className='circle'/>
              <div className='design-stage-inner'>
                <a className='work-paragraph-text amikoReg'>flesh out into med-fi prototype</a>
                <br></br>
                <a className='work-paragraph-text amikoReg'>cognitive walkthroughs, usabiltiy tests</a>
                <br></br>
                <a className='work-paragraph-text amikoReg'>--> reiterate & refine design</a>
              </div>
            </div>
            <div className='design-stage-outer'>
              <img src={late} alt="late" className='circle'/>
              <div className='design-stage-inner'>
                <a className='work-paragraph-text amikoReg'>turn design into a working hi-fi prototype</a>
                <br></br>
                <a className='work-paragraph-text amikoReg'>heuristic evaluations, field testing</a>
                <br></br>
                <a className='work-paragraph-text amikoReg'>--> deploy to real users (next steps)</a>
              </div>
            </div>
          </div>
          
          </p> 
        </div>
        <br></br>
        <br></br>

{/* predesign */}
        <div className='work-text-container'>
          <p className='work-subtitle amikoBold'>PRE-DESIGN
          <br></br>
          <a className='work-paragraph-text amikoBold'> Human Need & Central Tasks 
          <br></br>
            <a className='amikoReg'>The human need is to book a vacation. 
            The central tasks are to book a flight and book accommodations. </a>
          </a>
          <br></br>          
          <br></br>
          <a className='work-paragraph-text amikoBold'> Evaluation Goals 
          <br></br>
            <a className='amikoReg'>1. Determine whether using Expedia to book both flights and accommodations is more efficient than using separate interfaces for booking flights and accommodations. <br></br>
            2. Determine how well Expedia supports users in finding flights and accommodations that meet their criteria.</a>
          </a>
          <br></br>          
          <br></br>
          <a className='work-paragraph-text amikoBold'> Participant Pool
          <br></br>
            <a className='amikoReg'>10 university students (ages 18-24) were selected using convenience sampling. 
            They are diverse in terms of demographics/backgrounds. Students have worked with online platforms for school, so they possess at least a basic level of computer literacy (using the internet). This group will likely be the ones booking vacations now or in the future.</a>
          </a>
          <br></br>          
          <br></br>
          <a className='work-paragraph-text amikoBold'> Study Protocol Summary
          <br></br>
            <a className='amikoReg'>Participants were given a consent form at least a day before asking if we can record their screen during the session. If consent was not provided, we took notes and filled out coding sheets in real-time. Participants were to complete a task that encapsulates every feature Expedia offers and book a specific trip. We recorded their screen during the task to capture their behavior/comments. After, we conducted a semi-structured interview to gain a better understanding of their experience during the task. The length of the entire session was ~1 hour (introduction, instruction, observation, and interview). 
            <br></br><br></br>
            Subjective qualitative data was collected from watching their behavior and noting down quotes during the task. We used thematic analysis (affinity diagramming) and identified themes that emerged from commonly-observed behaviors / comments. This analysis helped us determine whether participants prefered using Expedia over other booking sites. The objective quantitative data collected were the filters chosen during the task, as the task considered each filter option. We counted the average number of filters chosen to determine the helpfulness of each option in supporting user tasks. We also compared the total time taken to book a trip using Expedia versus two separate interfaces to determine which one was more efficient. Also, we found the averages from the Likert scale for each interview question to determine how effective Expedia is in supporting the task of booking a trip.  </a>          </a>
          <br></br>          
          <br></br>
          <a className='work-paragraph-text amikoBold'> Evaluation Rationale
          <br></br>
            <a className='amikoReg'>For our data collection methods, we chose to do an observation and a follow up semi-structured interview. <br></br><br></br>
            An observation allows us to watch the user work through different tasks and interact with the interfaces. We can observe their comments, behaviour and tone in real time. <br></br><br></br>
            A follow up semi-structured interview is a good way to summarize their overall experience of using Expedia and give their opinions on other vacation booking sites (such as Air Canada and Hotels.com). Also, we can gain a better understanding as to how relevant and helpful the filter options are within both the flight and accommodation tabs.</a>
          </a>

          <br></br>          
          <br></br>
          <a className='work-paragraph-text amikoBold'> Piloting Findings
          <br></br>
            <a className='amikoReg'>FINDING 1: We found that it was too overwhelming and redundant to have a separate task as part of our observation for the filter tasks.Therefore, we found it better to just create one large scenario as part of our observation with more requirements and see which filters the user ends up using so we are better able to evaluate our goals/see how relevant and accessible the filters are instead of giving them a set criteria/list of filters to use (which defeats the purpose of our evaluation goal).<br></br><br></br>
            FINDING 2: As per the TA’s feedback and from our pilot study, we found that a semi-structured interview is better suited for our purposes than a questionnaire. Unlike with a questionnaire, a semi-structured interview allows us the flexibility to cater the questions to each participant to get the most information from them. Additionally, since we are already in a Zoom meeting with the participant, it makes more sense that we ask these questions in person rather than via an online form.<br></br><br></br>
            CHANGES TO EVALUATIONS: After getting feedback from the TA and from piloting, we have made several changes to our evaluations. We condensed it so that it is not as long and wordy. For the central tasks, we focussed more on highlighting the steps that the user needs to take instead of what the system does. For the Evaluation Goals, we also tweaked our questions to be stated in clear statements, without any sub questions and asked them in a way where they are less biased. For the protocol, we added methods that we will be using to analyze the data (thematic analysis and finding critical incidents). Furthermore, We found that it was too overwhelming and redundant to have a separate task as part of our observation for the filter tasks.Therefore, we found it better to just create one large scenario with more requirements and see which filters the user ends up using so we are better able to evaluate our goals/see how relevant and accessible the filters are instead of giving them a set criteria/list of filters to use (which defeats the purpose of our evaluation goal). In addition, we decided to use a semi-structured interview style instead of the questionnaire because we thought that it would give us more insight into the participant’s experience and allow them to elaborate more. However, we still wanted to keep the ability to gather some quantitative data so in addition to the interview questions, we decided to incorporate some of our questions from the questionnaire into the interview questions (ranking on a scale, etc) but still allow them to follow up/elaborate more on these questions to keep it more open ended.</a>
          </a>
          <br></br>          
          <br></br>
          
          <a className='work-paragraph-text amikoBold'> Qualitative Data & Analysis
          <br></br>
            <a className='amikoReg'>We identified 6 themes from our affinity diagram: 

            <br></br><br></br>    
            1. Confusion around the Packages feature offered on Expedia: Majority of the confusion was due to the lack of visibility of system status. For example, when a user checked off Add Flights while on the Stays tab, Expedia assumed that the user wanted to book a package and directed them through the package workflow. However, this is not clearly communicated to the user as many expressed that they didn’t know they were booking a package and were confused about the prices.
            <br></br><br></br>
            2. Getting lost between the Stays and Flights tabs: Every user started on Stays and either booked a package or accommodation first. Only one user decided to switch to Flights after inputting all of the information for Stays, suggesting he may have thought he was on Flights initially. Another user also inputted everything on Stays and asked “Do I have to book a flight before the accommodation?” suggesting she may have thought she was on Flights first. Some users had difficulty finding Flights after booking Stays which is under More Travel. Interestingly, one user opened both tabs separately using Google instead of navigating between the two tabs on the interface.
            <br></br><br></br>
            3. Convenience: Most of our users found Expedia to be helpful because everything was on one platform. When we asked users to book flights and accommodations on different interfaces, it was common for them to use other websites to compare information but felt stressed and disorganized when the sites showed different information (ie: same hotel on different websites with different ratings, reviews, and descriptions). Generally, users thought Expedia simplified the process of booking a trip as it was “aggregated together” while other websites had “scattered” information. 
            <br></br><br></br>
            4. Good filter visibility and options: Many of the users found and used the filters on the left side panel very quickly. They found filtering to be easy as they didn’t have to enter anything, including those who didn’t normally use filters or Expedia. They also mentioned that other interfaces didn’t show many filtering options compared to Expedia and we saw several users hover over filters on these interfaces but never using them.
            <br></br><br></br>
            5. Overwhelmingness. Although we identified the fourth theme being good filter visibility, there were opposing opinions when we saw a common habit of manually searching much of the criteria. Some users would use cmd-f to find the filters, suggesting they didn’t want to look through the available features. Other users used little to no filters and relied on scrolling and the details panel until they found options that matched the requirements
            <br></br><br></br>
            6. Bad visibility for features that aren’t filters: We found that most users did not end up using the dropdown sort feature as most of it was covered in the filter panel. Additionally, options like seating class or number of travelers were not made immediately visible to the users as many had trouble finding it as a filter. During situations like these, users would scroll around or use cmd-f to locate it. 
</a>
          </a>
          <br></br>          
          <br></br>
          <a className='work-paragraph-text amikoBold'> Quantitative Data & Analysis 
          <br></br>
            <a className='amikoReg'>Accommodations (Filters)<br></br>
            ☆ Frequently selected (8+/10 participants): star rating, meal plans, fully refundable, price (lowest) <br></br>
            ☆ Sometimes selected (5-7) accommodations: amenities, accessibility<br></br>
            ☆ Occasionally selected (2-4): price per night, guest rating, distance from X<br></br>
            ☆ Rarely selected (less than 2): popular filters, payment type, popular locations<br></br><br></br>
            </a>
            <a className='amikoReg'>Flights (Filters)<br></br>
            ☆ Frequently selected (8+/10 participants): price (everyone used it; automatically set)<br></br>
            ☆ Sometimes selected (5-7): stops, airlines<br></br>
            ☆ Occasionally selected (2-4): departure time<br></br>
            ☆ Rarely selected (less than 2): departure (earliest)<br></br><br></br>
            In most cases, users spent more time overall booking both flights/accommodations on two separate interfaces compared to booking on Expedia.
            </a>
          </a>
          <br></br>          
          <br></br>
          <a className='work-paragraph-text amikoBold'> Conclusions
          <br></br>
            <a className='amikoReg'>We conclude that booking both flight and accommodations on Expedia is more efficient than using separate interfaces. The quantitative data collected from the observations show that users spent ~2 minutes less on average when booking both their flights and accommodations on Expedia versus when they used two separate interfaces (Figures 5,6 and 7). This agrees with the average of the participants' interview responses, where on a scale of 1 to 5 (Not Helpful to Very Helpful), participants answered 4.8 (Figure 8) with the reason that it is more convenient to have information “aggregated together” instead of “scattered” across multiple interfaces. Most participants also preferred Expedia over other websites if they were short on time to book a trip, further supporting its convenience and efficiency. 
            <br></br><br></br>
            However, for participants who used Packages, the average time to book flights and accommodations was 20 seconds less than on separate interfaces (Figure 5). Contrastingly, users who booked accommodations under Stays and flights under Flights saved 2 minutes on average (Figure 6). Thus, we conclude Packages was confusing for users who have never used it before as the feature lacked visibility of system status, causing participants to spend more time trying to understand which step of the booking process they were on and if the remaining steps will have everything they need. This confusion did not affect those familiar with Packages. Thus, we predict users will navigate faster once they understand the Packages workflow.
            <br></br><br></br>
            Finally, we conclude that Expedia supports users in finding flights/accommodations that meet their criteria due to their variety of filters. They are clearly visible on the left hand side panel and participants were able to discover new filters they didn’t know existed. Furthermore, the names and descriptions of the filters were easy for users to understand. However, the dropdown sort options on Expedia were not as beneficial to participants in terms of meeting their criteria during the task. The sort dropdown only had ~10% usage compared to a ~23% usage with the filters (Figure 1). Participants preferred using filters over the sort options, which had similar options as filters except distance from X, but most users had difficulty finding this option and relied on the details panel to tell them the distance. There were certain features that were hard to locate (ex. Trip type, # of travelers, distance from X) and we noticed an increased amount of mouse movement and scrolling from users, hinting at a findability issue. From our findings, we conclude that Expedia supports users in finding accommodations and flights through its filters on the left side panel, but dropdown features near the top of the screen were not highly utilized.
            </a>
          </a>
          <br></br>          
          <br></br>
          <a className='work-paragraph-text amikoBold'> Task Examples
          <br></br>
            <a className='amikoReg'>BOOKING FLIGHTS: John Appleseed is trying to book flights for him and his 
            two friends to go on a trip to Los Angeles from November 11th - November 14th. They are senior year 
            students at the University of Calgary with no prior experiences with flight booking. They want to go 
            to Disneyland Park but they don’t drive so they’d like to stay relatively close to Disney. As students, 
            they are cost conscious and John would like to use his credit card to find the cheapest round trip flight. 
            He also gets points when it’s with a Canadian airline. They’d also prefer having a direct flight, but are 
            okay with 1 stop as long as it’s not over a 2 hour layover. Finally, they can only depart after his friend 
            finishes work at 5PM. <br></br><br></br>
            BOOKING ACCOMMODATIONS: Jane Doe wants to take her husband and two young children on a vacation to Orlando, Florida between July 1st - July 10th. Jane only trusts 4 star or more hotels due to past experiences and wants complimentary breakfast, two beds, and a pool for the kids. Before booking, she wants to make sure that the reservation is fully refundable in case her children get sick or plans change. She also wants to be able to walk to Disney World so she looks for hotels close to this destination. For her flights, she is flexible with prices and times, but she only wants direct flights as her young children will not want to wait that long. Then she completes her booking by paying with her credit card.</a>
          </a>
          <br></br>          
          <br></br>
          <a className='work-paragraph-text amikoBold'> Requirements & Justifications
          <br></br>
            <a className='amikoReg'>In this section we list both existing system requirements as well as things that will ideally change. <br></br><br></br></a>
            <a className='amikoReg'>Must Do<br></br>
            ☆ Exists: Allow users to book flights and accommodations --> Booking flights and accommodations are the central tasks to support the human need, so the system must have a workflow for achieving this task. <br></br>
            ☆ Exists: Make filters for flights and accommodations easy to find options that match their criteria --> Having increased visibility and findability for filters makes the booking process more intuitive by reducing the amount of learning time and stress for users, who already have many other factors to consider as they plan out their trip. <br></br><br></br>
            </a>
            <a className='amikoReg'>Should Do<br></br>
            ☆ Clearly indicate steps involved in the booking process for both flights and accommodations --> Users should easily recognize which step of the booking process they are on, so the system should clearly communicate what the user needs to do at any given point in the workflow. Clear communication of the process is important for minimizing confusion and human error.<br></br>
            ☆ Advanced search options other than filtering should be offered and easily findable --> Offering advanced search options to complement filtering is needed given that the search results for flights and accommodations is often very large and with filtering alone, some users might still have to manually search through the results. Additionally, it is important that the advanced search options are easily findable as they are applicable to many users.<br></br><br></br>
            </a>
            <a className='amikoReg'>Could Do<br></br>
            ☆ Be able to add flights and accommodations into one cart to see total price --> “Cart” is a universal feature when making purchases online and is transferable for those who want to continue browsing after selecting one item. This allows users to manage and see their total cost, making their purchase once, instead of making separate purchases.
            </a>
          </a>

          <br></br>          
          <br></br>
          <a className='work-paragraph-text amikoBold'> Piloting Findings
          <br></br>
            <a className='amikoReg'>FINDING 1: We found that it was too overwhelming and redundant to have a separate task as part of our observation for the filter tasks.Therefore, we found it better to just create one large scenario as part of our observation with more requirements and see which filters the user ends up using so we are better able to evaluate our goals/see how relevant and accessible the filters are instead of giving them a set criteria/list of filters to use (which defeats the purpose of our evaluation goal).<br></br><br></br>
            FINDING 2: As per the TA’s feedback and from our pilot study, we found that a semi-structured interview is better suited for our purposes than a questionnaire. Unlike with a questionnaire, a semi-structured interview allows us the flexibility to cater the questions to each participant to get the most information from them. Additionally, since we are already in a Zoom meeting with the participant, it makes more sense that we ask these questions in person rather than via an online form.<br></br><br></br>
            CHANGES TO EVALUATIONS: After getting feedback from the TA and from piloting, we have made several changes to our evaluations. We condensed it so that it is not as long and wordy. For the central tasks, we focussed more on highlighting the steps that the user needs to take instead of what the system does. For the Evaluation Goals, we also tweaked our questions to be stated in clear statements, without any sub questions and asked them in a way where they are less biased. For the protocol, we added methods that we will be using to analyze the data (thematic analysis and finding critical incidents). Furthermore, We found that it was too overwhelming and redundant to have a separate task as part of our observation for the filter tasks.Therefore, we found it better to just create one large scenario with more requirements and see which filters the user ends up using so we are better able to evaluate our goals/see how relevant and accessible the filters are instead of giving them a set criteria/list of filters to use (which defeats the purpose of our evaluation goal). In addition, we decided to use a semi-structured interview style instead of the questionnaire because we thought that it would give us more insight into the participant’s experience and allow them to elaborate more. However, we still wanted to keep the ability to gather some quantitative data so in addition to the interview questions, we decided to incorporate some of our questions from the questionnaire into the interview questions (ranking on a scale, etc) but still allow them to follow up/elaborate more on these questions to keep it more open ended.</a>
          </a>
          </p> 
        </div>

        {/* mid */}
        <div className='work-text-container'>
          <p className='work-paragraph-text amikoBold'>
          3. Mid Design Stage
          <br></br>
            <a className='amikoReg'>
            This was once <a href='https://thesnackapp.com/' className='link'>https://thesnackapp.com/</a>        
            </a>
          </p>
        </div>

        <video width="1000" autoPlay={true} loop muted>
          <source src={website} type="video/mp4"></source>
        </video>

        {/* late-design stage */}
        <div className='work-text-container'>
          <p className='work-paragraph-text amikoBold'>2
          4. Late Design Stage
          <br></br>
            <a className='amikoReg'>
            What I plan to do...    
            </a>
          </p>
        </div>

  

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        {/* connect */}
        <div className='text-container' style={{justifyContent: "center"}}>
          <p className='work-subtitle amikoBold'>WANT TO KNOW MORE?</p>
        </div>
        <div className='text-container' style={{justifyContent: "center"}}>
          <p className='work-paragraph-text amikoReg'>
            Let's grab a snack and chat more 🥨
          </p>
        </div>
        <div className='work-text-container'style={{justifyContent: "center"}}>
          <a href='mailto:naaomitran@gmail.com' className='icon-container'>
            <img src={email} alt="email" className='icon' />
          </a>
          <a href="tel:204-583-3899" className='icon-container'>
            <img src={phone} alt="phone" className='icon'/>
          </a>
          <a href='https://www.linkedin.com/in/naaomitran/' className='icon-container'>
            <img src={linkedin} alt="linkedin" className='icon'/>
          </a>
          <a href='https://github.com/naaomitran' className='icon-container'>
            <img src={github} alt="github" className='icon'/>
          </a>
        </div>

        <br></br>
        <br></br>
        <br></br>

        {/* BACK */}
        <div className='text-container'>
          <a className='link work-paragraph-text amikoBold' href={`${process.env.PUBLIC_URL}/`}>
            BACK
          </a>
        </div>

      </header>
    </div>
  );
}

export default Expedia;
