import 'font-awesome/css/font-awesome.min.css';
import '../css/bootstrap.css';
import '../css/style.css';
import '../css/responsive.css';
import '../css/style.scss';
import '../css/style.css.map';
import img from '../images/arrival-bg.png';
const Arrival = () => {
    return (
        <>

            {/* Arrival Section */}
            <section className="arrival_section">
                <div className="container">
                    <div className="box">
                    <div className="arrival_bg_box">
                        <img src={img} alt="New Arrivals" />
                    </div>
                    <div className="row">
                        <div className="col-md-6 ml-auto">
                        <div className="heading_container remove_line_bt">
                            <h2>#NewArrivals</h2>
                        </div>
                        <p style={{ marginTop: '20px', marginBottom: '30px' }}>
                            Vitae fugiat laboriosam officia perferendis provident aliquid voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic? Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex unde!
                        </p>
                        <a href="/product">Shop Now</a>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

            {/* End Arrival Section */}
        </>
    );
};

export default Arrival;