import {
  animate,
  group,
  keyframes,
  query,
  stagger,
  style,
  transition,
} from '@angular/animations';

export const basicTransition = transition('* => basic', [
  query(
    ':enter',
    [
      style({
        opacity: 0,
      }),
      animate(
        '3000ms',
        style({
          opacity: 1,
        })
      ),
    ],
    { optional: true }
  ),
]);

// ************************* HOME **************************** //

export const homeTransition = transition('*=>home', [
  group([
    query(
      '.container',
      [
        style({
          transform: 'scale(.1) rotate(-360deg)',
        }),
        animate(
          '450ms',
          keyframes([
            style({ transform: 'scale(0.1) rotate(-360deg)', offset: 0 }),
            style({
              transform: 'scale(0.5) rotate(-45deg)',
              offset: 0.75,
            }),
            style({ transform: 'scale(1) rotate(0deg)', offset: 1.0 }),
          ])
        ),
      ],
      { optional: true }
    ),
    query(
      '.container div',
      [
        style({
          'border-radius': '33%',
        }),
        animate(
          '550ms',
          style({
            'border-radius': '0%',
          })
        ),
      ],
      { optional: true }
    ),
  ]),
  query(
    '.container div span',
    stagger('100ms', [
      animate(
        '450ms',
        keyframes([
          style({ opacity: 0, offset: 0.0 }),
          style({ opacity: 0.6, offset: 0.1 }),
          style({ opacity: 1, offset: 0.101 }),
          style({ opacity: 0, offset: 0.103 }),
          style({ opacity: 0.6, offset: 0.2 }),
          style({ opacity: 1, offset: 0.202 }),
          style({ opacity: 0, offset: 0.205 }),
          style({ opacity: 0.6, offset: 0.3 }),
          style({ opacity: 1, offset: 0.305 }),
          style({ opacity: 0, offset: 0.308 }),
          style({ opacity: 0.6, offset: 0.4 }),
          style({ opacity: 1, offset: 0.405 }),
          style({ opacity: 0, offset: 0.5 }),
          style({ opacity: 0.6, offset: 0.502 }),
          style({ opacity: 1, offset: 0.508 }),
          style({ opacity: 0, offset: 0.6 }),
          style({ opacity: 0.6, offset: 0.605 }),
          style({ opacity: 1, offset: 0.7 }),
          style({ opacity: 0, offset: 0.702 }),
          style({ opacity: 0.6, offset: 0.708 }),
          style({ opacity: 1, offset: 0.8 }),
          style({ opacity: 0, offset: 0.802 }),
          style({ opacity: 0.6, offset: 0.808 }),
          style({ opacity: 1, offset: 0.9 }),
          style({ opacity: 0, offset: 0.902 }),
          style({ opacity: 1, offset: 0.908 }),
          style({ opacity: 0.5, offset: 1 }),
        ])
      ),
    ]),
    { optional: true }
  ),
]);

// HOME TO UX Transition
export const homeToUXTransition = transition('home=>UX', [
  group([
    query('.container div', [
      style({ 'border-width': 0 }),
      animate('200ms', style({ opacity: 0 })),
      style({ opacity: 0 }),
    ]),
    query('.UX', [
      style({
        opacity: 1,
        'transform-origin': '50% 50%',
      }),
      group([
        animate(
          '250ms ease-out',
          style({
            transform: ' scale(.7)',
          })
        ),
        animate(
          '400ms',
          style({
            opacity: 0,
          })
        ),
      ]),
    ]),

    query('.limit ', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'hidden',
        'z-index': 5,
        width: '100vw',
        height: '100vh',
      }),
    ]),

    query('.backgroudcircle ', [
      style({
        position: 'relative',
        'transform-origin': '50 50',
        left: '50vw',
        top: '50vh',
        opacity: 0,
        'border-radius': '50%',
        'background-color': 'var(--darker-UX-color)',
        width: '1em',
        height: '1em',
      }),
      animate(
        '750ms ease-out',
        style({
          transform: 'scale(250)',
          opacity: 0.7,
        })
      ),
    ]),
  ]),
]);

// HOME TO FE Transition
export const homeToFETransition = transition('home=>FE', [
  group([
    query('.container div', [
      style({ 'border-width': 0 }),
      animate('200ms', style({ opacity: 0 })),
      style({ opacity: 0 }),
    ]),
    query('.FE', [
      style({
        opacity: 1,
        'transform-origin': '50% 50%',
      }),
      group([
        animate(
          '250ms ease-out',
          style({
            transform: ' scale(.7)',
          })
        ),
        animate(
          '400ms',
          style({
            opacity: 0,
          })
        ),
      ]),
    ]),

    query('.limit ', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'hidden',
        'z-index': 5,
        width: '100vw',
        height: '100vh',
      }),
    ]),

    query('.backgroudcircle ', [
      style({
        position: 'relative',
        'transform-origin': '50 50',
        left: '50vw',
        top: '50vh',
        opacity: 0,
        'border-radius': '50%',
        'background-color': 'var(--darker-FE-color)',
        width: '1em',
        height: '1em',
      }),
      animate(
        '750ms ease-out',
        style({
          transform: 'scale(250)',
          opacity: 0.7,
        })
      ),
    ]),
  ]),
]);

// HOME TO SL Transition
export const homeToSLTransition = transition('home=>SL', [
  group([
    query('.container div', [
      style({ 'border-width': 0 }),
      animate('200ms', style({ opacity: 0 })),
      style({ opacity: 0 }),
    ]),
    query('.SL', [
      style({
        opacity: 1,
        'transform-origin': '50% 50%',
      }),
      group([
        animate(
          '250ms ease-out',
          style({
            transform: ' scale(.7)',
          })
        ),
        animate(
          '400ms',
          style({
            opacity: 0,
          })
        ),
      ]),
    ]),

    query('.limit ', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'hidden',
        'z-index': 5,
        width: '100vw',
        height: '100vh',
      }),
    ]),

    query('.backgroudcircle ', [
      style({
        position: 'relative',
        'transform-origin': '50 50',
        left: '50vw',
        top: '50vh',
        opacity: 0,
        'border-radius': '50%',
        'background-color': 'var(--darker-SL-color)',
        width: '1em',
        height: '1em',
      }),
      animate(
        '750ms ease-out',
        style({
          transform: 'scale(250)',
          opacity: 0.7,
        })
      ),
    ]),
  ]),
]);

// HOME TO BE Transition
export const homeToBETransition = transition('home=>BE', [
  group([
    query('.container div', [
      style({ 'border-width': 0 }),
      animate('200ms', style({ opacity: 0 })),
      style({ opacity: 0 }),
    ]),
    query('.BE', [
      style({
        opacity: 1,
        'transform-origin': '50% 50%',
      }),
      group([
        animate(
          '250ms ease-out',
          style({
            transform: ' scale(.7)',
          })
        ),
        animate(
          '400ms',
          style({
            opacity: 0,
          })
        ),
      ]),
    ]),

    query('.limit ', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'hidden',
        'z-index': 5,
        width: '100vw',
        height: '100vh',
      }),
    ]),

    query('.backgroudcircle ', [
      style({
        position: 'relative',
        'transform-origin': '50 50',
        left: '50vw',
        top: '50vh',
        opacity: 0,
        'border-radius': '50%',
        'background-color': 'var(--darker-BE-color)',
        width: '1em',
        height: '1em',
      }),
      animate(
        '750ms ease-out',
        style({
          transform: 'scale(250)',
          opacity: 0.7,
        })
      ),
    ]),
  ]),
]);
