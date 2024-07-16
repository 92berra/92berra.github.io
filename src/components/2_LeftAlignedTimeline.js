import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, { timelineOppositeContentClasses, } from '@mui/lab/TimelineOppositeContent';

export default function LeftAlignedTimeline() {
  return (

    <Timeline sx={{ [`& .${timelineOppositeContentClasses.root}`]: { flex: 0.2, }, }}>
      <h1 className='ContentTitle'>ABOUT ME</h1> 
      
      <br/>

      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2024.07.14 ~ 
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <b>GANs Tutorial</b>
          <br />
          <i>Side-project</i>
          <br/>
          PyTorch(mps) 2.3.1, Generative Adversarial Nets, M3 Macbook Pro, macOS Sonoma 14.5, VSCode
          <br />
          • Vanilla GAN <br/>
          • DCGAN <br/>
          • cDCGAN <br/>
          • Pix2pix <br/>
          <br />

        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2024.05.21 ~ 2024.05.31
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <b>My Own Website Using React</b>
          <br />
          <i>Side-project</i>
          <br/>
          React, Typescript, Git Pages, M3 Macbook Pro, macOS Sonoma 14.5, VSCode
          <br />
          <br />
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2022.01
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <b>Neural Networks and Deep Learning</b>
          <br />
          <i>Coursera Online Class</i>
          <br />
          Evaluated 90.28
          <br />
          Tensorflow, Jupyter notebook, Numpy
          <br />
          <br />
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
          <b>Master's Degree In Computer Science And Engineering</b>
          <br />
          <i>Full-time</i>
          <br />
          GPA : 4.0 / 4.5<br />
          Thesis: Location-based Hangul Component Separation
          for Accuracy Improvement of Korean Font Generation Model <br />
          <br />
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
          <b>Advertising Agency Customer Center Counselor</b> <br />
          <i>Part-time Job</i> <br /><br />
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
            To Attract Initial Investment For Startup</b> <br />
          <i>Full-time</i> <br />
          • Discuss deep learning model through regular meeting with Samsung Electronics Researcher.<br />
          • Discuss business model with all employees.<br />
          • Create figures for presentation based on the meeting summary.<br />
          <br />
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
          <b>IT Solution Inside Sales Representative</b> <br />
          <i>Full-time</i> <br />
          • Conduct online research on companies that need to adopt Dassault Systèmes solutions and write a report through cold call.<br />
          • Telemarketing tasks such as cold calls and happy calls according to campaigns hosted by ISPark.<br />
          • Simple training of Cloud PLM.<br />
          • Write a PLM proposal.<br /> <br />
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
          <b>HPE Server Field Sales Representative</b> <br />
          <i>Full-time</i> <br />
          • Secure customers through cold calls and
          arrange kick-off meeting.
          <br />
          • Check the client's status during the meeting.<br />
          • Configure server and write estimates that fit the
          customer's budget and requirements.
          <br />
          • Respond to discount requests.<br />
          • Ordering, Delivery, and subsequent management after contract.<br />
          <br />
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
          <b>AI Project Assistant</b> <br />
          <i>Contract</i> <br />
          • Linux Initial Setting for Object Detection Model Developmemt<br />
          • Generate Dataset for Object Detection Model Training<br />
          <br />
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
          <b>Android-based Smart Application Devloper Training Course</b> <br />
          <i>Trainee</i> <br />
          • Java, Spring MVC, JDBC, MySQL, HTML, CSS, Javascript<br /> <br />
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
          <b>HANCOM Technical Support Engineer</b> <br />
          <i>Contract</i> <br />
          • Respond to all calls to the HANCOM Software Customer Support Center Line,
          average of 40 calls per day.<br />
          • Remote Support: Basic guide of how to use HANCOM products (Hangul, Hanshow, Hancell, etc).
          Clean installation using registry editor.<br />
          • Provide information how to purchase HANCOM products: Personal(Home) License, Enterprise License, Educational License<br />
          <br />
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
          <b>Word Processor Specialist</b> <br />
          <i>Certificate</i> <br />
          <i>Korea Chamber of Commerce and Industry</i>
          <br />
          • As companies process large amounts of documents, fast and
          accurate document preparation is required.
          This certificate is a national technical qualification test
          that evaluates basic computer usage and the ability to operate and
          edit word processing programs for efficient document creation.
          <br />
          <br />
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
          <b>Bachelor's Degree In Computer Engineering</b> <br />
          <i>Educational Background</i> <br />
          • Student Reporter In University Press<br />
        </TimelineContent>
      </TimelineItem>
    </Timeline>

  );
}
