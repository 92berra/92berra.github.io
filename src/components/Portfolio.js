import sample_animation from './assets/sample_animation.gif';
import research from './assets/1-introduction-overview.png';

export default function Portfolio() {
    return (
        <div>
            <div>
                <h1 className='ContentHeader'>PORTFOLIO</h1>
            </div>

            <br/>
            <br/>

            <div align='center'>
                <h3 className='ContentHeader'>Vanilla GAN with FashionMNIST</h3>
                M3 Macbook Pro / VSCode / PyTorch(mps) 2.3.1

                <br/>
                <br/>
                
                <a href='https://github.com/92berra/Selfstudy/tree/main/pytorch'>
                    <img src={sample_animation}/>
                </a>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>

            <div align='center'>
                <h3 className='ContentHeader'>Location-based Hangul Component Separation <br/>
                for Accuracy Improvement of Korean Font Generation Model</h3>
                Tensorflow-gpu 1.13 / opencv-python / Few-shot Font Generation

                <br/>
                <br/>

                <a href='https://github.com/92berra/Decompose'>
                    <img src={research} width={1000}/>
                </a>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}