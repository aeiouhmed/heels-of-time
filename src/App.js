import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

const Segment = ({ title, content, id }) => {
  const segmentRef = useRef();

  useEffect(() => {
    const q = gsap.utils.selector(segmentRef);

    gsap.fromTo(q('h2'),
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: segmentRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
          markers: false,
        }
      }
    );

    gsap.fromTo(q('p'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2, // Stagger animation for paragraphs
        scrollTrigger: {
          trigger: segmentRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
          markers: false,
        }
      }
    );
  }, []);

  return (
    <div id={id} className="segment" ref={segmentRef}>
      <h2>{title}</h2>
      {content.split('\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

function App() {
  const appRef = useRef();
  const segments = [
    {
      id: 'segment1',
      title: 'Lorem Ipsum Dolor Sit Amet',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus, non volutpat ipsum. Sed ac elit at nulla facilisis.
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Integer ac leo. Sed tristique dictum lacus. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nam convallis. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.`
    },
    {
      id: 'segment2',
      title: 'Consectetur Adipiscing Elit',
      content: `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.
In hac habitasse platea dictumst. Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam leo, nec dapibus tortor nibh sed augue. Integer eu magna sit amet metus fermentum posuere. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa.`
    },
    {
      id: 'segment3',
      title: 'Sed Do Eiusmod Tempor',
      content: `Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio. Morbi nunc odio, gravida at, cursus nec, luctus a, lorem. Maecenas tristique orci ac sem.
Duis ultricies pharetra magna. Donec accumsan interdum nisi. Aenean lectus egestas eget, feugiat eu, molestie eget, ornare sagittis, felis. Vestibulum volutpat mollis arcu. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augu.
Aliquam erat volutpat. Nam dui ligula, fringilla a, euismod sodales, sollicitudin vel, wisi. Morbi auctor lorem non est. Curabitur ornare lectus quis mi. Fusce consectetuer risus a nunc. Maecenas eu wisi. Nullam at arcu a est sollicitudin euismod.`
    },
    {
      id: 'segment4',
      title: 'Incididunt Ut Labore Et Dolore',
      content: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris a justo. Nulla facilisi. Duis fermentum, felis et ultrices condimentum, leo ipsum cursus elit, non fermentum nisi ipsum sed risus.
Donec eget tellus non erat lacinia fermentum. Donec in velit vel ipsum auctor pulvinar. Proin ullamcorper urna et felis. Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula neque, a commodo lectus felis id velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.`
    },
    {
      id: 'segment5',
      title: 'Magna Aliqua Ut Enim Ad Minim',
      content: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.`
    },
    {
      id: 'segment6',
      title: 'Quis Nostrud Exercitation',
      content: `Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.`
    },
  ];

  return (
    <div className="App" ref={appRef}>
      <h1>React GSAP Informative Website Template</h1>
      {segments.map((segment) => (
        <Segment key={segment.id} {...segment} />
      ))}
    </div>
  );
}

export default App;
