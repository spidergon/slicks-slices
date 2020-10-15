import React from 'react';
import SEO from '../components/SEO';
import useLatestData from '../utils/useLatestData';

function CurrentlySlicing() {
  return (
    <div>
      <p>CurrentlySlicing</p>
    </div>
  );
}

function HotSlices() {
  return (
    <div>
      <p>HotSlices</p>
    </div>
  );
}

export default function HomePage() {
  const { slicemasters, hotSlices } = useLatestData();
  return (
    <>
      <SEO title="Hot Now" />
      <div className="center">
        <h1>The Best Pizza Downtown!</h1>
        <p>Open 11am to 11pm Every Single Day</p>
        <div>
          <CurrentlySlicing slicemastes={slicemasters} />
          <HotSlices hotSlices={hotSlices} />
        </div>
      </div>
    </>
  );
}
