import React from 'react';
import { describe, bench } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { RdsAudioPlayer } from '../components/audio-player';
import { RdsTransportBar } from '../components/transport-bar';
import { VideoEmbed } from '../players/video-embed';

describe('RdsAudioPlayer render performance', () => {
  bench(
    'initial render',
    () => {
      render(<RdsAudioPlayer src="/audio.mp3" title="Test Track" artist="Test Artist" />);
      cleanup();
    },
    { iterations: 100 },
  );

  bench(
    're-render with prop change',
    () => {
      const { rerender } = render(
        <RdsAudioPlayer src="/audio.mp3" title="Track 1" artist="Artist" />,
      );
      rerender(<RdsAudioPlayer src="/audio.mp3" title="Track 2" artist="Artist" />);
      cleanup();
    },
    { iterations: 100 },
  );
});

describe('RdsTransportBar render performance', () => {
  bench(
    'initial render',
    () => {
      render(<RdsTransportBar isPlaying={false} currentTime={0} duration={180} />);
      cleanup();
    },
    { iterations: 100 },
  );

  bench(
    're-render with time update',
    () => {
      const { rerender } = render(
        <RdsTransportBar isPlaying={true} currentTime={0} duration={180} />,
      );
      for (let t = 1; t <= 5; t++) {
        rerender(<RdsTransportBar isPlaying={true} currentTime={t} duration={180} />);
      }
      cleanup();
    },
    { iterations: 100 },
  );

  bench(
    're-render play/pause toggle',
    () => {
      const { rerender } = render(
        <RdsTransportBar isPlaying={false} currentTime={30} duration={180} />,
      );
      rerender(<RdsTransportBar isPlaying={true} currentTime={30} duration={180} />);
      rerender(<RdsTransportBar isPlaying={false} currentTime={30} duration={180} />);
      cleanup();
    },
    { iterations: 100 },
  );
});

describe('VideoEmbed render performance', () => {
  bench(
    'initial render (YouTube)',
    () => {
      render(<VideoEmbed url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />);
      cleanup();
    },
    { iterations: 100 },
  );

  bench(
    'initial render (native file)',
    () => {
      render(<VideoEmbed url="/video.mp4" type="file" />);
      cleanup();
    },
    { iterations: 100 },
  );

  bench(
    're-render with URL change',
    () => {
      const { rerender } = render(<VideoEmbed url="/video1.mp4" type="file" />);
      rerender(<VideoEmbed url="/video2.mp4" type="file" />);
      cleanup();
    },
    { iterations: 100 },
  );
});
