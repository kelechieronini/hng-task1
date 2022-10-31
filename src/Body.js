const Body = () => {
    return ( 
        
        <div className="content">
            <img src="images/share-button.png" className="share-btn" alt="" />
            <img src="images/menu-btn.png" className="menu-btn" alt="" />
            <div className="header">
                <img id="profile__img" src="images/suit.jpg" alt="" />
                <h1 id="twitter">k_eronini</h1>
                <h1 id="slack">Eronini</h1>
            </div>

            <div className="links">
                <a href="https://training.zuri.team/" id="btn__zuri" className="link-btn">Zuri Team</a>

                <a href="https://books.zuri.team/" id="books" title="Online bookstore for design and coding" className="link-btn">Zuri Books</a>

                <a href="https://books.zuri.team/python-for-beginners?ref_id=Eronini" id="btn__python" className="link-btn" title="Go from a beginner to expert level with this beginer-friendly book on python">Python Book</a>

                <a href="https://background.zuri.team/" id="pitch" className="link-btn" title="Renders the service of scouting for the best coders through background checks">Background Check for Coders</a>

                <a href="https://books.zuri.team/design-rules" id="btn__design" className="link-btn" title="Free design book with world class resources for becoming a master at design. Compiled by Zuri">Design Books</a>
            </div>

            <div className="icons">
                <img src="images/slack.png" alt="" />
                <img src="images/github.png" alt="" />
            </div>

            <footer>
                <img src="images/Zuri.internship_Logo.png" alt="" />
                <p>HNG Internship 9 Frontend Task</p>
                <img src="images/I4G.png" alt="" />
            </footer>
        </div>
        
    );
}
 
export default Body;