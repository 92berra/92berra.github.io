import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

export default function LeftAlignedTimeline() {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >

      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2022.01
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <b>Neural Networks and Deep Learning</b> <br/>
          <i>Coursera Online Class</i> <br/>
          <li>Evaluated 90.28</li>
          <li>Tensorflow, Jupyter notebook, Numpy</li>
          <br/>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2021.06 ~ 2024.02
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <b>Master's Degree In Computer Science And Engineering</b> <br/>
          <i>Full-time</i> <br/>
          <li>GPA : 4.0 / 4.5</li>
          <li>Thesis: Location-based Hangul Component Separation 
            for Accuracy Improvement of Korean Font Generation Model </li>
            <br/>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2021.03 ~ 2021.04
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <b>Advertising Agency Customer Center Counselor</b> <br/>
          <i>Part-time Job</i> <br/>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2020.12 ~ 2021.03
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <b>Develop Android Application And Write Business Plan 
            To Attract Initial Investment For Startup</b> <br/>
          <i>Full-time</i> <br/>
          <li>• Discuss deep learning model through regular meeting 
            with Samsung Electronics Researcher.</li>
          <li>• Discuss business model with all employees.</li>
          <li>• Create figures for presentation based on the meeting summary.</li>
          <br/>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2018.01 ~ 2020.06
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <b>IT Solution Inside Sales Representative</b> <br/>
          <i>Full-time</i> <br/>
          <li>• Conduct online research on companies that 
            need to adopt Dassault Systèmes solutions and 
            write a report through cold call.</li>
          <li>• Telemarketing tasks such as cold calls and happy calls 
            according to campaigns hosted by ISPark.</li>
            <li>• Simple training of Cloud PLM.</li>
            <li>• Write a PLM proposal.</li> <br/>
        </TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2017.09
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <b>Information Processing Engineer Qualification</b> <br/>
          <i>Trainee</i> <br/>
          <li>• Develop the ability to increase work efficiency
            by devloping programs for effective use of computers.
          </li> <br/>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2017.02 ~ 2017.06
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <b>HPE Server Field Sales Representative</b> <br/>
          <i>Full-time</i> <br/>
          <li>• Secure customers through cold calls and 
            arrange kick-off meeting.
          </li>
          <li>• Check the client's status during the meeting.</li>
          <li>• Configure server and write estimates that fit the 
            customer's budget and requirements.
          </li>
          <li>• Respond to discount requests.</li>
          <li>• Ordering, Delivery, and subsequent management after contract.</li>
          <br/>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2016.09 ~ 2016.11
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <b>AI Project Assistant</b> <br/>
          <i>Contract</i> <br/>
          <li>• Linux Initial Setting for Object Detection Model Developmemt</li>
          <li>• Generate Dataset for Object Detection Model Training</li>
          <br/>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2015.12 ~ 2016.06
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <b>Android-based Smart Application Devloper Training Course</b> <br/>
          <i>Trainee</i> <br/>
          <li>• Java, Spring MVC, JDBC, MySQL, HTML, CSS, Javascript</li> <br/>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2015.07 ~ 2015.10
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <b>HANCOM Technical Support Engineer</b> <br/>
          <i>Contract</i> <br/>
          <li>• Respond to all calls to the HANCOM Software Customer Support Center Line, 
            average of 40 calls per day.</li>
          <li>• Remote Support: Basic guide of how to use HANCOM products (Hangul, Hanshow, Hancell, etc).
          Clean installation using registry editor.</li>
          <li>• Provide information how to purchase HANCOM products: Personal(Home) License, Enterprise License, Educational License</li>
          <br/>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2015.05
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <b>Driver's License</b> <br/>
          <i>License</i> <br/>
          <i>Seoul Metropolitan Police Agency</i> <br/><br/>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2015.05
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <b>Word Processor Specialist</b> <br/>
          <i>Certificate</i> <br/>
          <i>Korea Chamber of Commerce and Industry</i>
          <br/>
          <li>• As companies process large amounts of documents, fast and 
            accurate document preparation is required. 
            This certificate is a national technical qualification test 
            that evaluates basic computer usage and the ability to operate and 
            edit word processing programs for efficient document creation.
          </li>
          <br/>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2011.03 ~ 2015.02
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <b>Bachelor's Degree In Computer Engineering</b> <br/>
          <i>Educational Background</i> <br/>
          <li>• Student Reporter In University Press</li>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
