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
  'discovery-questions': {
    title: 'Discovery Questions Guide for HVAC/Roof Sales',
    videoUrl: '',
    showVideo: false,
    content: (
      <>
        <h3>Introduction</h3>
        <p>
          Effective discovery questions are essential for understanding customer needs and providing the right solutions. 
          This guide provides a comprehensive set of questions organized by category to help you conduct more effective sales conversations.
        </p>

        <h3>Pain</h3>
        <ul>
          <li>What specific issues are you experiencing with your current HVAC/Roof?</li>
          <li>How have these problems affected you and your family?</li>
          <li>What's your biggest motivation for addressing this issue now?</li>
          <li>How have you been managing the discomfort in the meantime?</li>
        </ul>
        <p><strong>Additional options:</strong></p>
        <ul>
          <li>On a scale of 1-10, how urgent does this situation feel to you right now?</li>
          <li>What would happen if this problem continues for another season?</li>
        </ul>

        <h3>Doubt</h3>
        <ul>
          <li>What solutions have you already attempted?</li>
          <li>If this program doesn't work out, what alternatives do you have?</li>
          <li>Do you have the financial means to address this without assistance?</li>
          <li>Have you noticed how costs for these types of repairs have increased recently?</li>
        </ul>
        <p><strong>Additional options:</strong></p>
        <ul>
          <li>What's prevented you from finding a permanent solution until now?</li>
          <li>How confident are you in your ability to resolve this without professional help?</li>
        </ul>

        <h3>Cost</h3>
        <ul>
          <li>What are the ongoing costs of not addressing this issue?</li>
          <li>How much have you already invested in temporary fixes?</li>
          <li>What makes this a priority now versus when the problem first appeared?</li>
          <li>What financial impact is this having on your monthly expenses?</li>
        </ul>
        <p><strong>Additional options:</strong></p>
        <ul>
          <li>Beyond money, what other resources (time, comfort, peace of mind) is this problem consuming?</li>
          <li>How do you see these costs changing if you wait another 6-12 months?</li>
        </ul>

        <h3>Solution</h3>
        <ul>
          <li>What previous solutions have you tried and why weren't they satisfactory?</li>
          <li>Have you received other quotes or proposals? Why didn't you proceed?</li>
          <li>What concerns do you have about potential solutions?</li>
          <li>What energy efficiency measures have you already implemented?</li>
        </ul>
        <p><strong>Additional options:</strong></p>
        <ul>
          <li>What would your ideal solution look like?</li>
          <li>What aspects of the repair/replacement process concern you the most?</li>
        </ul>

        <h3>Desire</h3>
        <ul>
          <li>How will resolving this issue improve your daily life?</li>
          <li>What specific outcomes are you hoping to achieve?</li>
          <li>What would success look like to you once this is fixed?</li>
          <li>How has this problem affected your family's comfort and wellbeing?</li>
        </ul>
        <p><strong>Additional options:</strong></p>
        <ul>
          <li>Beyond the practical benefits, what emotional relief would solving this problem bring?</li>
          <li>What other home improvements might become possible once this issue is resolved?</li>
        </ul>

        <h3>Finances</h3>
        <ul>
          <li>Why is now the right time financially to address this?</li>
          <li>What financial parameters would make a solution work for you?</li>
          <li>How do you typically approach financing for major home improvements?</li>
          <li>If we could match or reduce your current expenses, would that work for your budget?</li>
        </ul>
        <p><strong>Additional options:</strong></p>
        <ul>
          <li>What financial concerns keep you up at night regarding this project?</li>
          <li>How would solving this problem affect your long-term financial planning?</li>
        </ul>

        <h3>Spouse</h3>
        <ul>
          <li>Who else is involved in making this decision?</li>
          <li>How aligned are you and your spouse on the priority of this issue?</li>
          <li>How is this problem affecting others in your household?</li>
          <li>What concerns might your spouse have about moving forward?</li>
        </ul>
        <p><strong>Additional options:</strong></p>
        <ul>
          <li>What would your spouse say is the most important factor in making this decision?</li>
          <li>How do you typically make major home improvement decisions together?</li>
        </ul>

        <h3>Using These Questions Effectively</h3>
        <p>
          Remember to use these questions as a guide, not a script. Listen carefully to your customer's responses and adapt your follow-up questions accordingly. 
          The goal is to understand their unique situation and tailor your solution to address their specific needs and concerns.
        </p>
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
