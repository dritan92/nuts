import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer'
import Article from './components/Article'

export default class App extends Component {
    render() {
        return(
          <>
          <div id="wrapper">
            <header id="header">
              <div class="logo">
                <img src={require('/lemi.png)')} />
                <span class="icon fa-diamond"></span>
              </div>
    						<div class="content">
    							<div class="inner">
                           <h1>Premier Australian Walnuts</h1>
                           <p>WE NOW HAVE OUR NEW CROP OF WALNUTS SO COME AND VISIT US TODAY!! JUST CLICK <a href="http://premieraustralianwalnuts.com">HERE</a><br />
                           NEW CROP AUSSIE PEANUTS IN STOCK NOW!! ORDER TODAY.</p>
                         </div>
                       </div>
                       <nav>
                         <ul>
                           <li><a href="#intro">Intro</a></li>
                           <li><a href="#work">Work</a></li>
                           <li><a href="#about">About</a></li>
                           <li><a href="#contact">Contact</a></li>

                         </ul>
                       </nav>
                     </header>
                     <div id="main">

                        <Article
                          id="intro"
                          title="Intro"
                          image = "./lemi.png"
                          body = "This is the intro"
                          description = "This is the description intro"/>

                          <Article
                            id="work"
                            title="Work"
                            image="images/pic02.jpg"
                            body = "This is the work body"
                            description = "This is the work description "/>

                          <Article
                            id="about"
                            title="About"
                            image="images/pic03.jpg"
                            body = "Premier Australian Walnuts is located in Shepparton, Victoria, we aim to provide the best range of Chandler and Cisco walnuts. We sell our produce for $10 per kg, in 10 kilo, 5 kilo and 1 kilo bags."
                            description = "Grocers in Shepparton, Victoria.
                                            GN DEVOLLI Pty Ltd.
                                            Phone: 0402 902 225.
                                            Phone: 0429 772 209"/>
                         <article id="contact">
                           <h2 className="major">Contact</h2>
                           <form method="post" action="#">
                             <div className="field half first">
                               <label for="name">Name</label>
                               <input type="text" name="name" id="name" />
                             </div>
                             <div className="field half">
                               <label for="email">Email</label>
                               <input type="text" name="email" id="email" />
                             </div>
                             <div className="field">
                               <label for="message">Message</label>
                               <textarea name="message" id="message" rows="4"></textarea>
                             </div>
                             <ul className="actions">
                               <li><input type="submit" value="Send Message" className="special" /></li>
                               <li><input type="reset" value="Reset" /></li>
                             </ul>
                           </form>
                           <ul className="icons">
                             <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                             <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                             <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                             <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
                           </ul>
                         </article>


                         <article id="elements">
                           <h2 className="major">Elements</h2>

                           <section>
                             <h3 className="major">Text</h3>
                             <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
                             This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
                             This is <u>underlined</u> and this is code: <code>for (;;) {` ... `}</code>. Finally, <a href="#">this is a link</a>.</p>
                             <hr />
                             <h2>Heading Level 2</h2>
                             <h3>Heading Level 3</h3>
                             <h4>Heading Level 4</h4>
                             <h5>Heading Level 5</h5>
                             <h6>Heading Level 6</h6>
                             <hr />
                             <h4>Blockquote</h4>
                             <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.</blockquote>
                             <h4>Preformatted</h4>

                           </section>

                           <section>
                             <h3 className="major">Lists</h3>

                             <h4>Unordered</h4>
                             <ul>
                               <li>Dolor pulvinar etiam.</li>
                               <li>Sagittis adipiscing.</li>
                               <li>Felis enim feugiat.</li>
                             </ul>

                             <h4>Alternate</h4>
                             <ul className="alt">
                               <li>Dolor pulvinar etiam.</li>
                               <li>Sagittis adipiscing.</li>
                               <li>Felis enim feugiat.</li>
                             </ul>

                             <h4>Ordered</h4>
                             <ol>
                               <li>Dolor pulvinar etiam.</li>
                               <li>Etiam vel felis viverra.</li>
                               <li>Felis enim feugiat.</li>
                               <li>Dolor pulvinar etiam.</li>
                               <li>Etiam vel felis lorem.</li>
                               <li>Felis enim et feugiat.</li>
                             </ol>
                             <h4>Icons</h4>
                             <ul className="icons">
                               <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                               <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                               <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                               <li><a href="#" className="icon fa-github"><span className="label">Github</span></a></li>
                             </ul>

                             <h4>Actions</h4>
                             <ul className="actions">
                               <li><a href="#" className="button special">Default</a></li>
                               <li><a href="#" className="button">Default</a></li>
                             </ul>
                             <ul className="actions vertical">
                               <li><a href="#" className="button special">Default</a></li>
                               <li><a href="#" className="button">Default</a></li>
                             </ul>
                           </section>

                           <section>
                             <h3 className="major">Table</h3>
                             <h4>Default</h4>
                             <div className="table-wrapper">
                               <table>
                                 <thead>
                                   <tr>
                                     <th>Name</th>
                                     <th>Description</th>
                                     <th>Price</th>
                                   </tr>
                                 </thead>
                                 <tbody>
                                   <tr>
                                     <td>Item One</td>
                                     <td>Ante turpis integer aliquet porttitor.</td>
                                     <td>29.99</td>
                                   </tr>
                                   <tr>
                                     <td>Item Two</td>
                                     <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                     <td>19.99</td>
                                   </tr>
                                   <tr>
                                     <td>Item Three</td>
                                     <td> Morbi faucibus arcu accumsan lorem.</td>
                                     <td>29.99</td>
                                   </tr>
                                   <tr>
                                     <td>Item Four</td>
                                     <td>Vitae integer tempus condimentum.</td>
                                     <td>19.99</td>
                                   </tr>
                                   <tr>
                                     <td>Item Five</td>
                                     <td>Ante turpis integer aliquet porttitor.</td>
                                     <td>29.99</td>
                                   </tr>
                                 </tbody>
                                 <tfoot>
                                   <tr>
                                     <td colspan="2"></td>
                                     <td>100.00</td>
                                   </tr>
                                 </tfoot>
                               </table>
                             </div>

                             <h4>Alternate</h4>
                             <div className="table-wrapper">
                               <table className="alt">
                                 <thead>
                                   <tr>
                                     <th>Name</th>
                                     <th>Description</th>
                                     <th>Price</th>
                                   </tr>
                                 </thead>
                                 <tbody>
                                   <tr>
                                     <td>Item One</td>
                                     <td>Ante turpis integer aliquet porttitor.</td>
                                     <td>29.99</td>
                                   </tr>
                                   <tr>
                                     <td>Item Two</td>
                                     <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                     <td>19.99</td>
                                   </tr>
                                   <tr>
                                     <td>Item Three</td>
                                     <td> Morbi faucibus arcu accumsan lorem.</td>
                                     <td>29.99</td>
                                   </tr>
                                   <tr>
                                     <td>Item Four</td>
                                     <td>Vitae integer tempus condimentum.</td>
                                     <td>19.99</td>
                                   </tr>
                                   <tr>
                                     <td>Item Five</td>
                                     <td>Ante turpis integer aliquet porttitor.</td>
                                     <td>29.99</td>
                                   </tr>
                                 </tbody>
                                 <tfoot>
                                   <tr>
                                     <td colspan="2"></td>
                                     <td>100.00</td>
                                   </tr>
                                 </tfoot>
                               </table>
                             </div>
                           </section>

                           <section>
                             <h3 className="major">Buttons</h3>
                             <ul className="actions">
                               <li><a href="#" className="button special">Special</a></li>
                               <li><a href="#" className="button">Default</a></li>
                             </ul>
                             <ul className="actions">
                               <li><a href="#" className="button">Default</a></li>
                               <li><a href="#" className="button small">Small</a></li>
                             </ul>
                             <ul className="actions">
                               <li><a href="#" className="button special icon fa-download">Icon</a></li>
                               <li><a href="#" className="button icon fa-download">Icon</a></li>
                             </ul>
                             <ul className="actions">
                               <li><span className="button special disabled">Disabled</span></li>
                               <li><span className="button disabled">Disabled</span></li>
                             </ul>
                           </section>

                           <section>
                             <h3 className="major">Form</h3>
                             <form method="post" action="#">
                               <div className="field half first">
                                 <label for="demo-name">Name</label>
                                 <input type="text" name="demo-name" id="demo-name" value="" placeholder="Jane Doe" />
                               </div>
                               <div className="field half">
                                 <label for="demo-email">Email</label>
                                 <input type="email" name="demo-email" id="demo-email" value="" placeholder="jane@untitled.tld" />
                               </div>
                               <div className="field">
                                 <label for="demo-category">Category</label>
                                 <div className="select-wrapper">
                                   <select name="demo-category" id="demo-category">
                                     <option value="">-</option>
                                     <option value="1">Manufacturing</option>
                                     <option value="1">Shipping</option>
                                     <option value="1">Administration</option>
                                     <option value="1">Human Resources</option>
                                   </select>
                                 </div>
                               </div>
                               <div className="field half first">
                                 <input type="radio" id="demo-priority-low" name="demo-priority" checked />
                                 <label for="demo-priority-low">Low</label>
                               </div>
                               <div className="field half">
                                 <input type="radio" id="demo-priority-high" name="demo-priority" />
                                 <label for="demo-priority-high">High</label>
                               </div>
                               <div className="field half first">
                                 <input type="checkbox" id="demo-copy" name="demo-copy" />
                                 <label for="demo-copy">Email me a copy</label>
                               </div>
                               <div className="field half">
                                 <input type="checkbox" id="demo-human" name="demo-human" checked />
                                 <label for="demo-human">Not a robot</label>
                               </div>
                               <div className="field">
                                 <label for="demo-message">Message</label>
                                 <textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
                               </div>
                               <ul className="actions">
                                 <li><input type="submit" value="Send Message" className="special" /></li>
                                 <li><input type="reset" value="Reset" /></li>
                               </ul>
                             </form>
                           </section>

                         </article>

                     </div>
                     <Footer/>
                 </div>
                <div id="bg" />
              </>
        )
    }
};
ReactDOM.render(<App />, document.getElementById("root"))
