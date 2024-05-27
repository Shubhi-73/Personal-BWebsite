import React from 'react';
const AI = () => {
return (
    <div className="max-w-7xl mx-64 p-8 text-left text-xl tracking-normal leading-relaxed font-serif">
    <p className="mb-4">Nvidia is the talk of the town. It’s now the 3rd most valuable company in the world and has probably gone to replace Netflix in FAANG.</p>

<p className="mb-4">Blackwell happens to be 4x more powerful in training AI models than its predecessor — Hopper. If things continue at this pace, we’d be living in a sci-fi movie in less than 2 decades.</p>

<p className="mb-4">Technological progress is not inevitable — As Elon Musk said. He said the tech progress happens only if — a lot of people take big bets and work really hard to make it happen. The invisible hand (capitalistic incentive as stated by Adam Smith, apologies for the tangent) is not enough.</p>

<h2 className="mt-6 mb-4 font-semibold">How did Nvidia manage to do this?</h2>

<p className="mb-4">The Nvidia folks were the real OGs, they coined the term GPU, Graphics Processing Unit. They entered a super niche market for computer nerds saying — Hey! We can make your games look much better.</p>

<p className="mb-4">Kudos to the co-founder and CEO — Jensen Huang who has taken the company to extraordinary heights.</p>

<h3 className="mt-6 mb-4 font-semibold">The inflection point for Nvidia came when they realized their GPUs could be adapted to power deep learning models.</h3>

<h2 className="mt-6 mb-4 font-semibold">But don’t they sound like completely different things?</h2>

<p className="mb-4">Not really. The crux is — they both require similar computations for the most part. The math behind both computer graphics and deep neural network models boils down to matrix operations.</p>

<p className="mb-4">For that we need to understand —</p>

<h2 className="mt-6 mb-4 font-semibold">Why do we use GPUs in the first place?</h2>

<p className="mb-4">Short answer — parallel processing. They break an instruction into several smaller parts which can be computed independently. For that, they use thousands of cores. This is different from CPUs which compute instructions one after the another which use maybe 4, 8, or 24 cores.</p>

<p className="mb-4">Thinking through first principles -
<br></br>
If you ever did matrix multiplication in high school, you’d know that having 3 friends calculate the answer of each row can make the process much faster.</p>

<p className="mb-4">GPUs use what they call “thread scheduling” which is having multiple threads work on different parts of the task concurrently. They are scheduled on a group of processing units or “Streaming Microprocessors”.</p>

<p className="mb-4">Computer Graphics involves transformations like:</p>
<ul className="list-disc pl-5 mb-4 text-xl">
    <li className="text-xl"><strong className="text-xl">Translation</strong>: moving an object</li>
    <li className="text-xl"><strong className="text-xl">Scaling</strong>: resizing</li>
    <li className="text-xl"><strong className="text-xl">Rotation</strong>: spinning on the objects’ axis</li>
</ul>
<img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*RqcVG32uiR932QbTr7YBdw.png"></img>
<p className="mb-4">Something similar happens in neural networks as well. Whether or not a neuron fires depends on the matrix multiplication of weights between neurons and an input vector.</p>
<img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*BKahTaJ8-2Rg6clqi1mCkg.png" alt="neural networks" />
<p>Parallel processing happens to be one of the several reasons why GPUs are preferred. Dedicated VRAM and ability to scale also provide significant advantages.</p>
<br></br>
<p className="mb-4">GPUs have found other applications:</p>
<p className="mb-4">Cryptocurrency Mining: Heavy mathematical calculations</p>
<p className="mb-4">Financial Modelling: Processing of large datasets</p>
<br></br>
<p className="mb-4">All these use parallel computing to some capacity, for that, GPUs and other advanced derivatives of GPUs are their best bets.</p>
<br></br>
<p className="mb-4">With the advent of AI, parallel processing chips were an eventuality. Video games, CAD software, medical imaging and other applications of graphics rendering pushed chipmakers to design something out-of-the-box early on. By the time AI became mainstream, these chips accelerated the process of innovation in the field.</p>
<p className="mb-4">If it wasn’t for the video game nerds, maybe we would’ve been years behind in our current pursuits in AI and high-performance computing.</p>
    </div>
  );

};
export default AI;