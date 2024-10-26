import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
const Faq = () => {
  return (
  <div>
    <Header/>
    <div className='faqs'>
      <h1>Frequently Asked Questions</h1>
      <br /><br />
      <div className='faqs1'>
      <div id="accordion">
        <div className="card">
          <div className="card-header">
            <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseOne">
            1.What are AR Fragrances?
            </a>
          </div>
          <div id="collapseOne" className="collapse" data-bs-parent="#accordion">
            <div className="card-body">
            AR Fragrances is a top perfume brand that offers a wide range of high-quality scents. We have perfumes for men, women, and unisex, inspired by famous designer fragrances.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
            2.Are AR Fragrances long-lasting?
            </a>
          </div>
          <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
            <div className="card-body">
            Yes, our perfumes are made to last all day. The quality ingredients ensure the scent stays strong from morning to night.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseThree">
            3.What are some of the best perfumes from AR Fragrances?
            </a>
          </div>
          <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
            <div className="card-body">
            Some of our top perfumes are: MR BLUE, DIVINE, HEIST, OCEAN SHADES, ADDICTION , GLAM GIRL
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseFour">
            4.Do you offer sample sizes or testers?
            </a>
          </div>
          <div id="collapseFour" className="collapse" data-bs-parent="#accordion">
            <div className="card-body">
            Yes, we offer a Pack of 5 Testers (5ml) where you can choose your favorite scents to try before buying full-size bottles.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseFive">
            5.What are the benefits of buying fragrance bundles?
            </a>
          </div>
          <div id="collapseFive" className="collapse" data-bs-parent="#accordion">
            <div className="card-body">
            Our fragrance bundles give you a variety of top scents at a lower price. Bundles include multiple perfumes, providing great value and a chance to try different fragrances.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseSix">
            6.Are there any special deals or discounts available?
            </a>
          </div>
          <div id="collapseSix" className="collapse" data-bs-parent="#accordion">
            <div className="card-body">
            Yes, we often have special deals and discounts. For example, the Bundle of 4 Top Scents 30ML for both men and women and the Bundle of Top 4 OUD 50ML are available at reduced prices.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseSeven">
            7.How should I apply AR Fragrances for the best results?
            </a>
          </div>
          <div id="collapseSeven" className="collapse" data-bs-parent="#accordion">
            <div className="card-body">
            For the best results, apply the perfume to pulse points like your wrists, neck, and behind your ears. These areas help spread the scent better.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseEight">
            8.Are AR Fragrances cruelty -free?
            </a>
          </div>
          <div id="collapseEight" className="collapse" data-bs-parent="#accordion">
            <div className="card-body">
            Yes, we do not test our perfumes on animals. We are committed to ethical practices.
            </div>
          </div>
        </div> 

        <div className="card">
          <div className="card-header">
            <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseNine">
            9.Can I return or exchange a fragrance if I don’t like it?
            </a>
          </div>
          <div id="collapseNine" className="collapse" data-bs-parent="#accordion">
            <div className="card-body">
            Yes, we have a return policy. If you are not happy with your purchase, you can return or exchange it. Check our website or contact customer service for details.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseTen">
            10.How can I contact AR Fragrances customer service?
            </a>
          </div>
          <div id="collapseTen" className="collapse" data-bs-parent="#accordion">
            <div className="card-body">
            You can contact us through our website’s contact form, email, or phone number. We are here to help with any questions or issues.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseEleven">
            11.Do AR Fragrances offer international shipping?
            </a>
          </div>
          <div id="collapseEleven" className="collapse" data-bs-parent="#accordion">
            <div className="card-body">
            Yes, we ship internationally. Shipping rates and times vary by location. Check our website for more information.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseTweleve">
            12.Are there any exclusive collections or limited edition fragrances?
            </a>
          </div>
          <div id="collapseTweleve" className="collapse" data-bs-parent="#accordion">
            <div className="card-body">
            Yes, we sometimes release exclusive collections and limited edition perfumes. Keep an eye on our website and social media for updates.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseThirteen">
            13.What makes AR Fragrances different from other perfume brands?
            </a>
          </div>
          <div id="collapseThirteen" className="collapse" data-bs-parent="#accordion">
            <div className="card-body">
            We offer high-quality, long lasting scents inspired by iconic designer perfumes at affordable prices, making luxury accessible to everyone.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseFourteen">
            14.Can I find AR Fragrances in physical stores?
            </a>
          </div>
          <div id="collapseFourteen" className="collapse" data-bs-parent="#accordion">
            <div className="card-body">
            We mainly sell online, but sometimes we have pop-up events or collaborations with stores. Check our website and social media for announcements.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseFifteen">
            15.How often do new fragrances get launched?
            </a>
          </div>
          <div id="collapseFifteen" className="collapse" data-bs-parent="#accordion">
            <div className="card-body">
            We regularly update our collection with new fragrances. Subscribe to our newsletter or follow us on social media for the latest news.
            </div>
          </div>
        </div>
      </div>
</div>
</div>
<Footer/>
</div>
  )
}

export default Faq
