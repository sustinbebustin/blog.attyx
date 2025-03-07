import React from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import './BlogPost.css';

// Blog post content data
const blogPostData = {
  'contact-views': {
    title: 'How to Set Up Contact Views',
    videoUrl: 'https://www.loom.com/embed/3c1110ecb5b745338d3cd0e011be26f8',
    showVideo: true,
    content: (
      <>
        <h3>Access Contacts:</h3>
        <p>
          Navigate to the Contacts section.<br />
          <em>Tip:</em> Pin this page in your bookmarks for quick access.
        </p>
        <h3>Add a New View:</h3>
        <p>
          Click the Add View button.<br />
          Search for the pre-made views (look for names that include "copy").<br />
          <strong>Note:</strong> If the view isn't available, reach out for help.
        </p>
        <h3>Configure View Columns:</h3>
        <p>
          If your view doesn't automatically include the same columns as shown in the example, click Edit Columns.<br />
          Add the required columns.<br />
          Optionally, freeze key columns (e.g., the first few) so they remain visible as you scroll.
        </p>
        <h3>Customize Filters:</h3>
        <p>
          <strong>Note: Our workflow has been updated!</strong> The video demonstrates the old method using List Membership, but we now use Advanced Filters instead.<br />
          <br />
          In the view, click on "Advanced Filters".<br />
          Set up filters as shown in the example below:<br />
          - Lead Class is any of Attempts-1<br />
          - First Contact Owner v1 is equal to any of [your name]<br />
          - Date entered "Marketing Qualified Lead (Lifecycle Stage Pipeline)" is less than 10 days ago<br />
          <br />
          <img src={process.env.PUBLIC_URL + "/advanced_filters.png"} alt="Advanced Filters Setup" className="blog-image" /><br />
          <br />
          <strong>For Copy Views:</strong><br />
          Click Clone View first.<br />
          Once cloned, remove "copy" (or "clone") from the view name.<br />
          Set the view to Private if you don't want others to edit it.<br />
          Click Save once the filters are set.
        </p>
        <h3>Review Specific Views:</h3>
        <p>
          Check views like All Leads and Attempt Zero (or your equivalent) to ensure they display your leads correctly.<br />
          Some lists might initially show no results until adjustments (e.g., setting attempts to zero by default) are completed.
        </p>
        <h3>Use the Preview Button:</h3>
        <p>
          Click the Preview button on a contact to quickly view details without opening new tabs.<br />
          Use the Call option in the preview. (Note: Ensure your HubSpot extension is set up if you want to receive inbound calls.)
        </p>
        <h3>Customize Contact Properties (Left Side Panel):</h3>
        <p>
          On the contact page, click Actions &gt; Customize Properties.<br />
          Click Add Property to include additional fields.<br />
          Drag new properties to reorder them as needed for easy viewing.
        </p>
        <h3>Utilize Inside Sales Notes:</h3>
        <p>
          Use the inside sales notes to track and analyze sales rep feedback (e.g., reasons for rejecting leads).<br />
          This helps in understanding trends (like non-homeowners or other common issues) and communicating effectively with the marketing team.
        </p>
        <h3>Final Checks:</h3>
        <p>
          Verify all settings across different areas (main view and preview mode) to ensure consistency.<br />
          Reach out with any questions or issues.
        </p>
        <p>Happy organizing!</p>
      </>
    )
  },
  'frame-the-call': {
    title: 'Frame the Call',
    videoUrl: '',
    showVideo: false,
    content: (
      <>
        <h3>Intro/Frame</h3>
        <div className="dialogue">
          <p><em>(Build quick rapport e.g. ask how their day is going, mention the weather in their area, or ask if they are from the area)</em></p>
          <p>"I've got 30 minutes blocked out for this call--do you mind if we jump right in?"</p>
        </div>

        <h3>Initial Positioning</h3>
        <div className="dialogue">
          <p>"Alright let's dive right in, I work for the ATTYX and it's my job to conduct the interviews with the homeowners that have applied for a spot in the HVAC Hero program to get access to the government fund that if qualified, will provide the homeowner with a brand new HVAC completely at no cost."</p>
          <p>"Make sense?"</p>
        </div>

        <h3>Setting Expectations</h3>
        <div className="dialogue">
          <p>"Before we get into it, I want to let you know that due to limited spots that we have, those are filled based on a 'first come, first served' basis and on average we get about 500 applications per month that we have to interview. For that reason, I may not have a final answer for you today. Worst case scenario, you might get waitlisted and I'll give you a call when you're on top of that list. However, if based on the interview and if you and your home qualify, then we can talk about next steps. Fair enough?"</p>
        </div>
      </>
    )
  },
  'discovery-questions': {
    title: 'Discovery Questions',
    videoUrl: '',
    showVideo: false,
    content: (
      <>
        <h3>Pain</h3>
        <h4>Isolate the challenge</h4>
        <ul>
          <li>I know we talked a little bit about this already but I want to make sure I get more context. What's the problem with your roof/Hvac?</li>
        </ul>

        <h4>Severity and impact</h4>
        <ul>
          <li>How long has that been an issue?</li>
          <li>What's your biggest concern when it comes to the age?</li>
          <li>When you think about living with this for longer, what worries you most?</li>
          <li>What's the hardest part about dealing with this day to day?</li>
        </ul>

        <h4>Reason for inaction</h4>
        <div className="dialogue">
          <p>Got it so to get further clarity here, normally when we talk to a homeowner who's been going through these kind of issues for long enough but haven't yet replaced their roof/hvac, it's usually for 1 or 2 reasons:</p>
          <ol>
            <li>They are waiting until it becomes a major issue that they need fix immediately</li>
            <li>They already agree it needs replacing but it's just a matter of funds</li>
          </ol>
          <p>Which one of those 2 do you feel like you fall into?</p>
        </div>

        <h3>Cost</h3>
        <h4>If they've never tried to fix the issue in the past</h4>
        <ul>
          <li>Sounds like you've been going through this issue for a while now, what's changed recently that makes you feel like this problem Is worth addressing now vs before or later?</li>
          <li>What do you see happening if this drags for another 6-12 months?</li>
        </ul>

        <h4>If they've attempted fixes that never took care of the issue</h4>
        <ul>
          <li>Can I ask you a personal question, since you've had this issue for a while now, why would you say now is the best time to take care of it once and for all?</li>
        </ul>

        <h4>Additional questions</h4>
        <ul>
          <li>I hate to ask this, but since it's a possibility so I'll ask anyway, what's your course of action if you don't end up qualifying for this program?</li>
          <li>Assuming you didn't see the ad or submit an application, what were you planning on doing with the roof?</li>
        </ul>

        <h3>Solution</h3>
        <ul>
          <li>What have you tried before to take care of this?</li>
          <li>What other quotes or prices have you gotten? Why didn't you proceed?</li>
          <li>Ultimately, when it comes to replacing your Roof/Hvac, what would your ideal scenario be?</li>
          <li>Looking back at the previous offers you had, what do you hope was different that would've made it a no brainer?</li>
        </ul>

        <h3>Finances</h3>
        <ul>
          <li>What do you do for work?</li>
          <li>When it comes to the finances of it all, what's your decision making process to make sure it financially makes sense?</li>
          <li>What's your credit score?</li>
        </ul>

        <h3>Partner/Spouse</h3>
        <ul>
          <li>Who else is involved in making this decision?</li>
          <li>Are you guys on the same page around the problem? What makes you say that?</li>
          <li>What would they need to hear or see to feel good about making the decision to replace your HVAC/Roof?</li>
          <li>How do you and your spouse/partner/kids usually work together on a decision like this?</li>
        </ul>

        <div className="dialogue">
          <p>Let's pretend for a second you would move forward with replacing the roof, would you need their permission to move forward?</p>
          <p><em>If you get anything but a definite no, reschedule and get the 3rd party on</em></p>
        </div>

        <h3>Bonus questions to dig deeper</h3>
        <ul>
          <li>Why do you say that?</li>
          <li>What makes you think that?</li>
          <li>Tell me more</li>
          <li>How so?</li>
          <li>Repeat the last word they said as a question</li>
        </ul>

        <h3>Extra Context</h3>
        <div className="dialogue">
          <p>I think we've covered a lot of ground here. Is there anything else you think I should know that we haven't covered yet?</p>
        </div>
      </>
    )
  },
  'feedback': {
    title: 'Feedback',
    videoUrl: '',
    showVideo: false,
    content: (
      <>
        <h3>Reframing Their Problem</h3>
        <div className="dialogue">
          <p>"Can I give you some feedback/thoughts?"</p>
          <p>"I know we talked about your biggest problem being (X - price of gas or age of boiler) and while I do agree that that is a problem, I don't see it as your biggest problem though. I think your biggest problem is uncertainty and lack of control over your bill. Boilers and furnaces by the manufacturer are recommended to be swapped once every 10-12 years MAX and they only give you a 1 year warranty because it's an old and inefficient system. Only 1 brand out of 10 gives you a longer warranty than that."</p>
          <p>"There's a lot of uncertainty when it comes to them because the cost of owning a boiler/furnace is extremely expensive, which is massive btw because sure you have the luxury to wait now but something going bad or prices going up is not a question of if, it's WHEN. Especially when parts and maintenance for boilers/furnaces can be $10K+. That's why I highly recommend HVAC for that peace of mind. Does that make sense?"</p>
        </div>
      </>
    )
  },
  'financial-objections': {
    title: 'Financial Objections Guide',
    videoUrl: '',
    showVideo: false,
    content: (
      <>
        <h3>What is it?</h3>
        <p>Our method for handling any sort of objection/concern pertaining to money.</p>

        <h3>Purpose</h3>
        <ul>
          <li>To take responsibility of ironing out logistics so the prospect can do it.</li>
          <li>To uncover the real objection (finances were a smokescreen).</li>
          <li>This process will help you uncover the smokescreen financial objections BEFORE we give away our power.</li>
        </ul>

        <h3>Key Distinctions</h3>
        <p>Follow this process and do not give out money or discounts willy nilly</p>

        <h3>Step 1: Isolating & Uncovering Resources</h3>
        <h4>Scenario 1 (You paced first objection and isolated finances)</h4>
        
        <p>Make sure you tie down TWICE before getting into the objection handling:</p>

        <div className="dialogue">
          <p>"So finances and everything aside, there isn't anything else that's keeping you from being less than 100% that this is what you wanna do?"</p>
          
          <p>"So in other words… you're not in a "SHOULD" I do this place to where you're going back and forth on if this is the best next step for you, it's more of a "HOW" can I do this place to where it's your GOAL to do this… it's just a matter of making it work financially?"</p>
        </div>

        <p>If confirmed, proceed with:</p>
        
        <div className="dialogue">
          <p>"Ok then. Well look - MOST of our homeowners sign up when it's simply a bill swap... but for certain homeowners, I don't feel like that's the best thing for them to do based on their situation financially so we figure out a way to make it more palatable. That being said, since it's your goal to do this… do you want to explore ways we could potentially work it out to make this work for you?"</p>
          
          <p>"Great - so we don't actually have any payment plans… it really is all customized depending on what's best for the homeowners."</p>
          
          <p>"So based on where you're at financially, it might be possible for us to make something work now OR at the very worst we can create a game plan for you to work towards in the future so you can do it sometime down the road."</p>
          
          <p>"That said - are you comfortable with having an open and honest conversation about exactly where you're at financially right now? And based on that we can figure out what's the best next step from here?"</p>
          
          <p>"Gotcha - in my opinion, cash flow is ultimately the lifeblood of your home. So in a lot of cases, it's important we protect that."</p>
        </div>

        <h3>Breaking Down Payments</h3>
        <p>Here's how I like to break this down—there are three key elements when it comes to payments:</p>
        <ul>
          <li>The Total Investment: The total cost, which you're not fully paying yourself.</li>
          <li>The Net Investment After Incentives: What your final cost over 25 years becomes after the government's contribution.</li>
          <li>The Monthly Payment: The manageable amount you pay monthly.</li>
        </ul>

        <div className="dialogue">
          <p>"Out of these three, which feels like the biggest challenge for you?"</p>
        </div>

        <h3>Handling Monthly Payment Concerns</h3>
        <div className="dialogue">
          <p>"Got it. So let's start with the monthly payment. Right now, how do you feel about your utility bill? Have you ever been late on it, or has it ever been a challenge to pay?"</p>
          
          <p>"Okay, so as long as the monthly payment is manageable or even the same as—or less than—what you're currently paying for electricity, then that's not an issue, correct?"</p>
          
          <p><em>(Play with reimbursements to frame it as net neutral and go for the close again)</em></p>
        </div>

        <h3>Addressing Net Investment Concerns</h3>
        <div className="dialogue">
          <p>"Now, let's look at the second element: the net investment—the amount you're paying over time after all incentives are factored in."</p>
        </div>
        
        <p>Most people who have concerns here fall into one of two categories:</p>
        <ul>
          <li>They feel the total amount over the years is more than they want to commit to.</li>
          <li>They're concerned the incentives may not come through as expected.</li>
        </ul>

        <div className="dialogue">
          <p>"Which one do you feel resonates more with your situation?"</p>
          <p><em>(They respond - Why do you say that?)</em></p>
        </div>

        <h4>If Concern #1: Total Amount Feels Too High</h4>
        <div className="dialogue">
          <p>"I understand. Let me ask you this: Hypothetically, if you stick with your utility company, what do you think you'll spend on electricity over the next 25 years?" <em>(Get total number in $)</em></p>
          
          <p>"The biggest mistake people make is JUST look at the now and only the now. It's how car dealerships lock people in for a 'good deal' on a monthly payment when the value of the car isn't worth that much at all."</p>
          
          <p>"If we fast forward 5, 10 or even 25 years and we meet again and I tell you hey, what did you end up paying for electricity, this amount of (electricity over 25 years) or that amount (net investment) which of those two do you feel would make you look like a genius? Because that's essentially what I'm trying to do, make you the biggest genius on the block..Why is that?"</p>
          
          <p>"The difference is, with solar, you're locking in your costs and owning your system—eventually eliminating payments altogether. On the other hand, staying with the utility company guarantees you're going to pay more."</p>
          
          <p>"So, if you had to choose, which would you rather invest in: an expense that only goes up or something that gives you control, savings, and eventual total freedom for paying any money for electricity?"</p>
        </div>

        <h4>If Concern #2: Won't get the incentives</h4>
        <div className="dialogue">
          <p>"Now that is a fair concern, now from your perspective, why do you feel like you may not get those incentives so I can think about that with you?"</p>
          
          <p><em>(Let them respond)</em></p>
          
          <p>"Here's the thing about these incentives, unfortunately people have gone a bit skeptical about receiving any money from the government. Rightly so."</p>
          
          <p>"However, it's a bit different in this case. The reason why people are skeptical about them is because they have never received any money from the government. Nor does it ever cross their head that all of a sudden they've become nice enough to give us some cash."</p>
          
          <p>"What most people don't know is that these incentives have nothing to do with being nice or finally the government kicking back some cash or even aiding in the US becoming more 'green'. The only reason they're doing that is because every homeowner that goes solar, saves THEM millions of dollars."</p>
          
          <p>"Do you know how much it costs to just have you on the main grid actively? Especially given that it's an old infrastructure? MILLIONS"</p>
          
          <p>"They'd do anything to get you off to lighten the load."</p>
          
          <p>"They're not being nice. They're being selfish actually. They're saying hey, we'll scratch your back a little by paying for that roof/HVAC, as long as you get off our grid that's costing us millions to maintain. So they see this as a trade, pay the few thousand to (Homeowner) and not have to worry about them anymore or pay millions of dollars to send em power over the next 25 years.."</p>
          
          <p>"What's cool is, you get to benefit a little from their trouble and not only wipe away your roof/HVAC bill but also save monthly on your payment because with these incentives your payment is cheaper."</p>
        </div>
      </>
    )
  },
  'support-objections': {
    title: 'Support Objections Guide',
    videoUrl: '',
    showVideo: false,
    content: (
      <>
        <h3>What is it?</h3>
        <ul>
          <li>How we navigate partner / spouse objections.</li>
          <li>We use this AFTER we've isolated it.</li>
        </ul>

        <h3>Purpose</h3>
        <ul>
          <li>Tie down certainty on the process (Create a 2v1)</li>
          <li>Gather intel about the spouse/partner</li>
          <li>Use that intel to find the best way to navigate</li>
        </ul>

        <h3>Key Distinctions</h3>
        <ul>
          <li>You really want to eliminate this on the front end.</li>
          <li>This is more for spouse. For other decision makers… I highly recommend you get them all on the same call.</li>
          <li>When you're narrowing down the "two spouse objections" if you get an unclear answer assume it's "permission".</li>
          <li>Feminine energy or people who aren't head of household, you'll probably want to "delay" and set follow-up.</li>
        </ul>

        <h3>Step 1: Isolate & Tie Down</h3>
        <p>Make sure you tie down TWICE before getting into the objection handling:</p>
        
        <div className="dialogue">
          <p>"So aside from letting your spouse know… there isn't anything else keeping you from being less than 100% certain that this is what you want to do?"</p>
          <p>"Awesome… so just hypothetically, if your spouse was on this call and said 'Bob, you do whatever is best for us' you'd be 100% in?"</p>
        </div>

        <h3>Step 2: Two Spouse Objections</h3>
        <div className="dialogue">
          <p>"Awesome I totally get that and agree with you. No problem at all."</p>
          <p>Now just for clarity's sake:</p>
          <p>#1) Is this a "respect" thing where no matter what you're going to do this regardless, you just want to let her know beforehand out of respect?</p>
          <p>Or #2) Do you need her permission to move forward? Meaning it's not ultimately your sole decision to make?</p>
        </div>

        <h3>Step 3: Information-Gathering</h3>
        <p>Key questions to ask:</p>
        <ul>
          <li>What'd you think she'll think about this?</li>
          <li>What'd you think she'll say when she hears the investment?</li>
          <li>Is she supportive of you trying to fix ____?</li>
          <li>Are you guys on the same page that this is a problem?</li>
          <li>Do they know about us (the company)?</li>
          <li>Do they know you're on this call?</li>
          <li>Can you talk to your spouse right now?</li>
          <li>When do you think you can talk to your spouse?</li>
        </ul>

        <h3>Step 4: Clarify & Contrast</h3>
        <div className="dialogue">
          <p>"Gotcha so I appreciate you being open and honest with me about that."</p>
          <p>"Great so look… I definitely want you to go talk to your spouse about this but I want to remind you that there's two ways you can bring this up to your spouse:"</p>
          <p>1. "It can be a conversation in which you go up to your partner and say: Hey honey you know that roof of ours that we've spent a ton of money on only for it to give us problems and stress? Well, I hopped on a call with this guy I met on the internet who might be able to help us, it's $35K and uh, what'd you think?"</p>
          <p>2. "Or it can be a conversation where you sit down and tell her confidently 'Hey babe I know that our roof has been a problem and despite the lack of finances to fix it you never complained. And I want to let you know that I've DECIDED and wanted to surprise you that we won't have this issue anymore and I already found someone to help us do that, but before I move forward… I want to get your buy in so I know we're in this together.'"</p>
        </div>

        <div className="dialogue">
          <p>"Now, let me ask you… which one of those two guys do you think is going to convince his wife?"</p>
          <p>"You're right - because if YOU'RE not certain about this… then she's not going to be either. Nor should she be. Because with scenario #1 you're being weak and uncertain in your direction as a leader and as a man."</p>
          <p>"So look the real question is… when you go to talk to your spouse, which one of those two guys are you going to be? The first or the second?"</p>
          <p>"Are you sure? Because if there's anything else that's keeping you from being less than 100% certain that this is what you want to do - let me know and we can talk about that."</p>
        </div>

        <h3>Possible Outcomes</h3>
        <ol>
          <li>You end up getting an uncertainty objection (the real objection)</li>
          <li>It's just a "respect" thing and you can "attyx docs/site survey" close</li>
          <li>It's a "permission" thing run credit app</li>
        </ol>

        <h3>Step 5: Closing Scenarios</h3>
        
        <h4>Scenario #1 (Use If "Respect"): ATTYX Docs Close</h4>
        <div className="dialogue">
          <p>"Great, so what we'll do from here is put you down for an appointment with our technician for a site survey to hold your spot AND so you can draw the line in the sand about that commitment to making this change."</p>
          <p>"Then if, by chance, your wife is going to divorce you over this and everything goes south… no worries at all we'll go ahead cancel that appointment and agreement. We're not in the business of ending marriages lol"</p>
          <p>"So we'll go ahead do some paperwork that has a 7 day cancellation clause, schedule your site survey and then set a follow-up call to re-review things that your spouse is more then welcome to join if she wants. And then we can figure out what's the best next step from there. Does that make sense?"</p>
          <p>"Sound good?"</p>
        </div>

        <h4>Scenario #2 (Use If You Don't Think ATTYX Docs Will Fly)</h4>
        <div className="dialogue">
          <p>"Great… so what we'll do from here is - I'll check on my system if you qualify for this program. 1) this just acts as a commitment that this is something you're serious about so that we're both on the same page. 2) There's no point in even bringing this up to your spouse if I physically cannot get you in. Sound good?"</p>
          <p>"Then when do you think you'll be able to talk to your spouse?"</p>
          <p>"Cool so we'll take that down now, and then set up a call on Tuesday to go over any questions and see what the best next step is from there. Sound good?"</p>
          <p>"Great - what's your billing address?"</p>
        </div>

        <h4>Scenario #3 (Use If You Don't Think Anything Will Fly, Or They Refute #1/#2): Follow-Up Close</h4>
        <div className="dialogue">
          <p>"Great - so when do you think you'll be able to talk to you spouse?"</p>
          <p>"Awesome… so go talk to her, and then let's set up another call on Tuesday to go over any questions you might have and figure out what our best next step is from here. Sound good?"</p>
          <p>"And look - if you still feel good, we can talk about getting going sooner rather than latter."</p>
          <p>"And if you start to feel like now isn't the right time, no worries at all. Let's still keep our call and at the very worst I'll give you some homework to work on to set you up to qualify for the program come the right time and until you're ready and we'll keep the communication and relationship open until the time is right."</p>
          <p>"Does that sound good?"</p>
        </div>
      </>
    )
  },
  'sales-philosophy': {
    title: 'Sales Philosophy',
    showVideo: false,
    content: (
      <>
        <h3>Tactics vs. Philosophy</h3>
        <ul>
          <li><strong>Tactics</strong>
            <ul>
              <li>A specific practice you use in sales (scripts, rebuttals, lines, etc.)</li>
              <li>These are easy to implement "quick fixes" but they are limited in their use and don't allow for behavioral flexibility</li>
              <li>Your dependence on these will hold you back as a salesperson</li>
            </ul>
          </li>
          <li><strong>Philosophy</strong>
            <ul>
              <li>Who you are and the way you think about sales</li>
              <li>Allows you to have your own unique, natural "style" with full behavioral flexibility</li>
              <li>The only downside to this is that in the beginning, when you're less experienced you're not certain what this looks like but it'll come with time and experience</li>
            </ul>
          </li>
        </ul>

        <h3>Understanding Why Prospects Say "Yes"</h3>
        <ul>
          <li>In order for you to meet expectations here at SUNco as a sales person and make the most amount of money possible, you must understand what prospects say "yes" to… otherwise how are you going to make it happen reliably?</li>
          <li>People do NOT enroll with us because of our company, website, brand, pictures, etc. even though these things CAN be helpful</li>
          <li>People CHOOSE us because they BELIEVE in our ability to get them from A {'->'} B
            <ul>
              <li>Emotional & Logical Situation vs. Destination (Hell Island vs. Heaven Island)</li>
            </ul>
          </li>
          <li>When the easiest and most logical path from their current situation to their desired situation is through US, then prospects will close
            <ul>
              <li><strong>Ex 1: Headache</strong>
                <ul>
                  <li>Problem: Discomfort in the head</li>
                  <li>Goal: Relief</li>
                  <li>Easiest and most logical path: Aspirin</li>
                </ul>
              </li>
              <li><strong>Ex 2: Tired in the morning</strong>
                <ul>
                  <li>Problem: Feeling groggy</li>
                  <li>Goal: Energetic</li>
                  <li>Easiest and most logical path: Coffee</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Situation</th>
                <th>Destination</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Spending Too Much Money On Electric</td>
                <td>Consistent Savings</td>
              </tr>
              <tr>
                <td>Leaky Or Damaged Roof</td>
                <td>Roof Replacement</td>
              </tr>
              <tr>
                <td>Uncertainty Around The Future</td>
                <td>25 Warranty</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>How to Get Prospects to Say "Yes"</h3>
        <ol>
          <li>Get them in a place where they're ready to take action/make a decision</li>
          <li>Position us as the easiest and most logical path</li>
        </ol>

        <h3>Get the Prospect in A Place Where They're Ready to Take Action</h3>
        <ul>
          <li>Most prospects stay stuck (or delay getting what they want) because they prospectinate when it comes to decision making… so we create Internal pressure (healthy tension) to put prospects in a position where they want to take action and DECIDE a new path forward</li>
          <li><strong>Internal vs. External Pressure</strong>
            <ul>
              <li>Internal - being challenged to the point where you're compelled to take action for your own reasons</li>
              <li>External - being pressured to do something for SOMEONE ELSE'S reasons</li>
            </ul>
          </li>
        </ul>

        <h3>How to Build Internal Pressure to Get Prospects to Take Action</h3>
        <ul>
          <li>Clearly define current situation and desired situation (your job is to help the prospect perceive the clear gap between the two)
            <ul>
              <li>Use specific language to paint a clear picture of what "hell island" and "heaven island" look like</li>
              <li>The better the explanation, the clearer the picture and the more we can see/feel the space in between</li>
            </ul>
          </li>
          <li>In order to achieve this, we create clarity around the "gap" through "Socratic Dialogue"
            <ul>
              <li>Socratic dialogue is using questions skillfully to allow the prospect to realize the communicate the gap on their own, without you telling them
                <ul>
                  <li>Example:</li>
                  <li>You have a bad roof that could collapse any moment! (what NOT to do)</li>
                  <li>You've been patching up your roof for the past 3 years and nothing has changed. If another 3 years go by and it's still leaking and it gets worse what would happen then? (this is socratic dialogue)</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>When done successfully, the prospect will feel compelled to take action in order to resolve the internal pressure through making a decision (if the conversation is done well, they'll sign with you)</li>
        </ul>

        <h3>How to Get Prospects to Choose Us Once They're Ready to Take Action</h3>
        <ul>
          <li>Now that you've successfully completed the above, the prospect is ready to take action but at this point that doesn't mean they will buy from us</li>
          <li>The way to get them to buy from us is to position our service as the easiest and most logical path from their current situation (hell island) to their desired situation (heaven island)</li>
          <li>You do this through the pitch during the phone call to set the appointment and on the appointment itself
            <ul>
              <li>That is why a great pitch and a great offer is key.</li>
            </ul>
          </li>
          <li>Think about it this way, you're ONLY 2 JOBS on an set/sales call are to:
            <ul>
              <li>Understand if/how we can help the prospect
                <ul>
                  <li>In order to do this, you must understand current vs. desired situation</li>
                </ul>
              </li>
              <li>Eliminate objections before the close
                <ul>
                  <li>This means destroying all other possibilities to get there.</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

        <h3>The Belief Ladder</h3>
        <h4>Introduction to Mental Models</h4>
        <ul>
          <li>A mental model is what people believe about a thing that strongly impacts how they use and relate to it
            <ul>
              <li>Ex: If I believe that in order to get a client, the prospect must make a decision on the first appointment, then I'm going to do everything I can to get the prospect to make a decision on the spot and if they don't decide then, I won't take any action because I believe it will have no effect on the outcome</li>
            </ul>
          </li>
          <li>I learned this mental model called the "Belief Ladder" from my mentor Cole Gordon and it was so helpful for that I taught it to over 400 reps and it's generated more than $1 Billion in revenue</li>
          <li>The belief ladder will help you set and or close more deals because it allows you to:
            <ul>
              <li>Understand exactly if/how you can help someone</li>
              <li>Clearly define the current vs. desired situation with enough depth to build trust</li>
            </ul>
          </li>
        </ul>

        <h4>The Belief Ladder</h4>
        <ul>
          <li>There are 7 beliefs a prospect needs to have sign with us
            <ul>
              <li>This also means there are 7 categories of reasons why the prospect will NOT be signed with us</li>
              <li>Said another way, every objection/reason why they didn't buy can be traced back to one of these 7 reasons/beliefs</li>
              <li>If prospect believes 1, 2, 3, 4, 5, 6 and 7 then they will become a customer</li>
              <li>If prospect does not believe 1, 2, 3, 4, 5, 6, OR 7 then they will NOT become a customer</li>
            </ul>
          </li>
          <li>During sales conversations, your job is to establish these 7 beliefs through asking questions BEFORE we transition into our pitch (we don't need all 7 when setting appointments)
            <ul>
              <li>The reason we do it this way is so we don't have to "hard sell" the prospect and they basically enroll themselves with little to no resistance</li>
            </ul>
          </li>
          <li>Any script or process covers these 7 beliefs WILL work and it will dramatically increase your earning potential</li>
        </ul>

        <h3>The 7 Beliefs</h3>

        <h4>"Pain" belief - the prospect must believe they're not comfortable in their current situation</h4>
        <ul>
          <li>If the pain/problem is not clear and present, the prospect will not have a strong enough reason to sign up</li>
          <li>No pain, no sale</li>
        </ul>

        <h4>"Doubt" belief - the prospect must believe they can't fix their problem on their own OR attempting to do so will be far more costly (time // money // effort) than working with us</h4>
        <ul>
          <li>To establish this belief, you must create "The Buying Pocket"</li>
        </ul>

        <h4>Creating "The Buying Pocket"</h4>
        <ul>
          <li>"The Buying Pocket" - a frame of reference where the lead feels like they can get to their desired situation AND the best way is through us
            <ul>
              <li>This acts like a guide, navigating the direction we lead the prospect during the sales process</li>
              <li>Through experience, you'll develop a sense for whether the prospect believes they can do it on their own/with someone else OR they believe they need us and to what extent they believe it</li>
            </ul>
          </li>
          <li>By gauging where they're at on the belief scale, you'll know exactly what you need to do to move them into the buying pocket</li>
        </ul>

        <h4>"Cost" belief - the prospect must believe that doing nothing is far more costly than the investment of time // money // effort to fix their problem</h4>
        <ul>
          <li>When the pain of doing nothing is GREATER than the pain of taking action in the midst of uncertainty, the lead will take action
            <ul>
              <li>This is what creates urgency and eliminates time objections</li>
            </ul>
          </li>
        </ul>

        <h4>"Desire" belief - the prospect must believe that solving the problem will make their life better and is worth it</h4>

        <h4>"Solution" belief - do they see our product as unique, different and superior to alternative methods?</h4>
        <ul>
          <li>This gives prospects the evidence they need to logically explain to themselves why they're better off working with us</li>
        </ul>

        <h4>"Support" belief - the prospect must believe that those close to them will be supportive of their decision</h4>
        <ul>
          <li>All relevant parties in the decision MUST be on the same page (ex: you'll never win if a husband and wife disagree with each other… they both must want to work with us)</li>
        </ul>

        <h4>"Finances" belief - the prospect must believe that they are able and willing to commit the financial resources required to achieve their desired outcome</h4>

        <h3>How to Make Sure The Prospect Has All 7 Beliefs</h3>
        <ul>
          <li>We "install" these beliefs through socratic dialogue
            <ul>
              <li>Socratic dialogue is using questions skillfully to allow the prospect to realize the communicate the gap on their own, without you telling them</li>
              <li>The beliefs are like a checklist… and the way we check the boxes is by asking specific questions (socratic dialogue)</li>
              <li>When you ask all the right questions, you check all the boxes
                <ul>
                  <li>If you achieve this BEFORE the pitch/offer, it's a 90%+ chance the prospect will become a client</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

        <h3>What Makes Socratic Dialogue So Powerful: Consistency Bias</h3>
        <ul>
          <li>When prospects answer the questions that install the 7 beliefs, not only are they telling you their thoughts… they're reinforcing the beliefs within themselves</li>
          <li>This is key because one of the most powerful drivers of human behavior is the innate need to be and/or appear consistent with their identity (who they are/what they say)</li>
          <li>When socratic dialogue is used as a mechanism to install The Belief Ladder, it'll feel completely natural for the prospect to move forward
            <ul>
              <li>This is how you get prospects thanking you for setting the appointment or getting into The Roof Rescue Program</li>
            </ul>
          </li>
          <li>This is how the world's greatest closers do it… this is how we do it.</li>
        </ul>

        <h3>Tonality & Subcommunication</h3>
        <h4>3 Mechanisms Of Social Conditioning That Dictate Idea Receptiveness</h4>
        <ul>
          <li>Our minds make quick judgements about new ideas in an effort to conserve energy</li>
          <li>The mind has 3 filters it uses to rapidly decide with as little energy as possible which ideas it accepts as true</li>
          <li>The three filters are
            <ul>
              <li>The certainty of the person communicating the ideas</li>
              <li>The inner alignment of the person communicating the ideas</li>
              <li>Other people's thoughts/ideas around the idea (i.e. social proof)</li>
            </ul>
          </li>
          <li>The greater these 3 elements in our communication, the more our prospects will believe what we say</li>
        </ul>

        <h4>The Certainty Of The Person Communicating The Ideas</h4>
        <ul>
          <li>When it comes to people's belief in what you say, HOW you say something (tonality & cadence) is far more important than WHAT you're saying</li>
          <li>Three distinctions to understand CERTAINTY when it comes to tonality:
            <ul>
              <li>"The Sound of Belief"
                <ul>
                  <li>Think of a mom telling her toddler how dangerous it is to touch a red-hot burning stove</li>
                  <li>The toddler may not know exactly what she's talking about but they can definitely hear the sound of belief around the idea.
                    <ul>
                      <li>You have to be so certain that you're 100% telling the truth that anyone else who disagrees is just losing it</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>"Hype" vs. "Resolve"
                <ul>
                  <li>Hype - an exaggeration of an idea/subject that makes it seem bigger/better than it really is
                    <ul>
                      <li>Our minds are wired to resist hype when it comes to new ideas</li>
                      <li>It's translated as "Why is hype needed if the idea is true?"</li>
                    </ul>
                  </li>
                  <li>Resolve
                    <ul>
                      <li>Resolve certainty as if it may as well already be done</li>
                      <li>Resolve is this place where you're so certain that it allows you to be fully relaxed, care-free, and even slightly humorous. Because inside you, you know it may as well already be done.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Shallow vs. Depth in Expression
                <ul>
                  <li>Words have weight. That weight is predicated upon someone's experience around what they're saying
                    <ul>
                      <li>Ex: A neurosurgeon who's had successfully completed 500 surgeries vs. a neurosurgeon who's only done 1</li>
                    </ul>
                  </li>
                  <li>Shallow expression is very linear and generic</li>
                  <li>Deep expression is extremely fluid and specific. Comes from vast amounts of experience and the ability to recognize nuances within situations</li>
                  <li>If you're a newer salesperson, the depth of your expression will come from your belief in yourself AND what you're offering (The Academy).
                    <ul>
                      <li>When we first started EA we hadn't gone through hundreds of clients, thousands of situations, millions of dollars in ad spend budgets yet. However the depth of expression came from we're willing to do whatever it takes to figure out how to help our clients</li>
                    </ul>
                  </li>
                  <li>To gauge the depth of your expression, analyze the fluidity of your conversation
                    <ul>
                      <li>Can you only say what you memorized or can you have a free-flowing, relaxed conversation?</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

        <h4>The Inner Alignment Of The Person Communicating The Ideas</h4>
        <ul>
          <li>Are you all talk or do you walk the walk?
            <ul>
              <li>When you're LIVING the things you talk about, it becomes ingrained into your being and you become FAR more influential
                <ul>
                  <li>Ex: a very fit personal trainer, a closer who's living the life they want.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>This is why a huge aspect of sales is growing as a person, raising your standards, and upleveling your identity. Because nothing is more influential than who you ARE and the way you THINK
            <ul>
              <li>I tell every new sales guy on my team that sales is like going to the theater to watch a play</li>
              <li>You're the only one in the audience and you're in the front row</li>
              <li>First act is you, get ready because you're about to have an up close encounter with who you are and how you behave (it's almost never fun to see)</li>
              <li>Second act is humans, you're about to have an up close encounter with how humans think and behave (often quite shocking)</li>
            </ul>
          </li>
          <li>Few tips on improving your Inner Alignment
            <ul>
              <li>The Mirror:
                <ul>
                  <li>You attract more of who you are</li>
                  <li>Are you the prospect who you want to attract? Do you make quick decisions? Do you invest in yourself? Or do you make a bunch of excuses? Your objections will be their objections</li>
                </ul>
              </li>
              <li>Standards:
                <ul>
                  <li>Are you keeping your promises and commitments to yourself?</li>
                  <li>Are you DOING what you're SAYING you're going to do?</li>
                  <li>You can't influence someone else to live up to their highest standards if you can't live up to yours</li>
                </ul>
              </li>
              <li>Improve Your Worldview:
                <ul>
                  <li>Your inputs dictate your outputs
                    <ul>
                      <li>If you're constantly feeding on garbage data and spending time with exhausting people, it'll affect your performance</li>
                      <li>The higher your quality inputs, the higher your quality outputs.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Confidence
                <ul>
                  <li>You should feel, sound, behave, walk like you've tackled this problem 1000x before</li>
                  <li>The reason why Frank Abagnale Jr, more famously known as America's best con man portrayed by Leonardo DiCaprio in Catch Me If You Can, got away with acting like a doctor, a lawyer and a pilot as a teenager
                    <ul>
                      <li>It was about how he behaved more than what he said</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

        <h4>Others Thoughts/Beliefs Around The Idea (Social Proof)</h4>
        <ul>
          <li>One of the world's most recent, biggest scams is FTX lead by Sam Bankman-Fried</li>
          <li>The reason why he succeeded was because he was backed by some of the biggest A-Listers in the country from Tom Brady, Steph Curry, etc.
            <ul>
              <li>Reason it works so well is because our internal dialogue goes, well, if Tom Brady feels good about it and he probably has a whole department of financial advisors to research where HIS money goes…Who am I to say I'm better than them. What possible research could I do that'll be better than the research THEY must have done</li>
            </ul>
          </li>
          <li>This is why I recommend using "status drops" when appropriate
            <ul>
              <li>This can be sharing case studies, past clients you've worked with especially if it was a higher end deal
                <ul>
                  <li>The prospect's mind will go well if it works on a $3M house, it'll work on my $500k house</li>
                </ul>
              </li>
              <li>Only do this when you're PROVING a point, don't do it for no reason</li>
            </ul>
          </li>
        </ul>

        <h3>Vocal Tonality: 3 Tells Of Authority</h3>
        <ul>
          <li>Full Range Of Expression
            <ul>
              <li>You've probably already heard about body language to show confidence like head up, shoulders back, back straight, etc.</li>
              <li>This is the equivalent of that but in tonality and vocal cues instead. You're not being timid or monotone, you're adjusting the inflection in your voice to increase the impact of specific elements
                <ul>
                  <li>Ex: I didn't say he hit his wife</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Care-free (free flow) expression vs. Contained expression
            <ul>
              <li>You have to be free of what others think about you - and be the uncontained, freely flowing expressed version of you.</li>
              <li>You're relaxed, grounded, and not second guessing or judging your expression.
                <ul>
                  <li>Have you ever had a conversation with someone and you're almost having two conversations instead of one. You're also having an inner dialogue of "What should I ask next?" "Do they like me?"</li>
                  <li>Personally that's been a huge work in progress because I'm very sociable by nature and it speaks to my identity directly. If you're not careful, the success or failure of who you are can be tied to the success or failure of your expressions</li>
                </ul>
              </li>
              <li>You need to be fully at ease and the best way to gauge that is if you're having fun</li>
              <li>Example:
                <ul>
                  <li>Think about a time you truly did not care if you made the sale or not. You literally - did - not - care. And then you made the sale anyway. That's what we're talking about here</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Flexible Cadence
            <ul>
              <li>You don't want to have monotone pacing…</li>
              <li>What holds attention is pauses and shifts in cadence.</li>
              <li>Sometimes shifts in cadence will emphasize certain words of importance.</li>
            </ul>
          </li>
        </ul>

        <h3>3 Levels Of Rapport // 3 Different Tonalities</h3>
        <ul>
          <li>Looking For Agreement - Upward Inflecting Tonality</li>
          <li>Neutral - Equal Inflecting Tonality</li>
          <li>Making A Firm Statement/Command - Downward Inflecting Tonality</li>
        </ul>
      </>
    )
  }
};

const BlogPost = () => {
  const { viewId } = useParams();
  
  // Default to contact-views if the viewId doesn't match any known blog post
  const currentPost = blogPostData[viewId] || blogPostData['contact-views'];
  
  return (
    <div className="blog-post">
      <h2>{currentPost.title}</h2>
      {currentPost.showVideo && <VideoPlayer videoUrl={currentPost.videoUrl} />}
      <div className="blog-content">
        {currentPost.content}
      </div>
    </div>
  );
};

export default BlogPost;
