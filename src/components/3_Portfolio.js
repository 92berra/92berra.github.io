import gan_result_1 from './assets/2_portfolio_1.gif';
import gan_result_2 from './assets/2_portfolio_2.gif';
import paper_review from './assets/2_portfolio_3.png';
import research from './assets/1-introduction-overview.png';

export default function Portfolio() {
    return (
        <div>
            <div>
                <h1 className='ContentTitle'>PORTFOLIO</h1>
            </div>

            <br/>
            <br/>

            <div align='center'>
                <h3 className='ContentSubTitle'>GANs Tutorial</h3>
                
                <a href='https://github.com/92berra/GANs-Tutorial'>
                    <img src={gan_result_1} style={{maxWidth: '80%'}}/>
                    <br/>
                    <img src={gan_result_2} style={{maxWidth: '80%'}}/>
                </a>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>

            <div align='center'>
                <h3 className='ContentSubTitle'>
                Location-based Hangul Component Separation
                for Accuracy Improvement of Korean Font Generation Model</h3>

                <a href='https://github.com/92berra/Decompose'>
                    <img src={research} style={{maxWidth: '80%'}}/>
                </a>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>

            <div align='center'>
                <h3 className='ContentSubTitle'>Paper Reviews</h3>

                <a href='https://github.com/92berra/Reviews'>
                    <img src={paper_review} width={400} />
                </a>
            </div>
        </div>
    )
}