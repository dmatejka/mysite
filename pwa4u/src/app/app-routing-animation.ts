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

    /* BACKGROIUND CIRCLE animation */
    query('.limit ', [
      style({
        position: 'absolute',
        top: '10vh',
        opacity: 1,
        width: '100vw',
        height: '90vh',
      }),
    ]),

    query('.backgroudcircle ', [
      style({
        'z-index': -1,
        opacity: 0,
        'background-color': 'var(--lighter-primary-color)',
      }),
      animate(
        '750ms ease-out',
        style({
          transform: 'scale(200)',
          opacity: 1,
        })
      ),
      style({
        opacity: 0,
      }),
    ]),
  ]),

  // stroboscope
  query(
    '.container div ',
    stagger('250ms', [
      animate(
        '650ms',
        keyframes([
          style({ opacity: 0.8, offset: 0.0 }),
          style({ opacity: 0.6, offset: 0.1 }),
          style({ opacity: 1, offset: 0.101 }),
          style({ opacity: 0.6, offset: 0.2 }),
          style({ opacity: 1, offset: 0.202 }),
          style({ opacity: 0.8, offset: 0.205 }),
          style({ opacity: 1, offset: 0.305 }),
          style({ opacity: 0.8, offset: 0.308 }),
          style({ opacity: 0.6, offset: 0.4 }),
          style({ opacity: 1, offset: 0.405 }),
          style({ opacity: 0.6, offset: 0.502 }),
          style({ opacity: 1, offset: 0.508 }),
          style({ opacity: 0.8, offset: 0.6 }),
          style({ opacity: 1, offset: 0.7 }),
          style({ opacity: 0.8, offset: 0.702 }),
          style({ opacity: 1, offset: 0.8 }),
          style({ opacity: 0.8, offset: 0.802 }),
          style({ opacity: 1, offset: 0.9 }),
          style({ opacity: 0.8, offset: 0.902 }),
          style({ opacity: 1, offset: 0.908 }),
          // style({ opacity: 0.9, offset: 1 }),
        ])
      ),
    ]),
    { optional: true }
  ),
]);

// ANY TO UX Transition
export const anyToUXTransition = transition('*=>UX', [
  // HOME TO UX Transition
  group([
    /* SUBTITLE animation */
    query(
      '#subtitle',
      [animate('400ms', style({ opacity: 0 })), style({ opacity: 0 })],
      { optional: true }
    ),

    /* BOXES animation */
    query(
      '.container div',
      [
        animate('200ms', style({ opacity: 0, transform: 'scale(0)' })),
        style({ opacity: 0 }),
      ],
      { optional: true }
    ),

    query(
      '.UX ',
      [
        style({
          opacity: 0.5,
          'transform-origin': '50% 50%',
          transform: 'scale(1)',
        }),
        group([
          animate(
            '1000ms ease-out',
            style({
              transform: ' scale(25)',
              opacity: 0,
            })
          ),
        ]),
      ],
      { optional: true }
    ),

    /* BACKGROIUND CIRCLE animation */
    query('.limit ', [
      style({
        position: 'absolute',
        top: '10vh',
        opacity: 1,
        width: '100vw',
        height: '90vh',
      }),
    ]),

    query('.backgroudcircle ', [
      style({
        opacity: 0,
        'background-color': 'var(--darker-UX-color)',
      }),
      animate(
        '750ms ease-out',
        style({
          transform: 'scale(200)',
          opacity: 0.8,
        })
      ),
      style({
        opacity: 0,
      }),
    ]),
  ]),
]);

// ANY TO FE Transition
export const anyToFETransition = transition('*=>FE', [
  // HOME TO FE Transition
  group([
    /* SUBTITLE animation */
    query(
      '#subtitle',
      [animate('400ms', style({ opacity: 0 })), style({ opacity: 0 })],
      { optional: true }
    ),

    /* BOXES animation */
    query(
      '.container div',
      [
        animate('200ms', style({ opacity: 0, transform: 'scale(0)' })),
        style({ opacity: 0 }),
      ],
      { optional: true }
    ),

    query(
      '.FE ',
      [
        style({
          opacity: 0.5,
          'transform-origin': '50% 50%',
          transform: 'scale(1)',
        }),
        group([
          animate(
            '1000ms ease-out',
            style({
              transform: ' scale(25)',
              opacity: 0,
            })
          ),
        ]),
      ],
      { optional: true }
    ),

    /* BACKGROIUND CIRCLE animation */
    query('.limit ', [
      style({
        position: 'absolute',
        top: '10vh',
        opacity: 1,
        width: '100vw',
        height: '90vh',
      }),
    ]),

    query('.backgroudcircle ', [
      style({
        opacity: 0,
        'background-color': 'var(--darker-FE-color)',
      }),
      animate(
        '750ms ease-out',
        style({
          transform: 'scale(200)',
          opacity: 0.8,
        })
      ),
      style({
        opacity: 0,
      }),
    ]),
  ]),
]);

// ANY TO SL Transition
export const anyToSLTransition = transition('*=>SL', [
  // HOME TO SL Transition
  group([
    /* SUBTITLE animation */
    query(
      '#subtitle',
      [animate('400ms', style({ opacity: 0 })), style({ opacity: 0 })],
      { optional: true }
    ),

    /* BOXES animation */
    query(
      '.container div',
      [
        animate('200ms', style({ opacity: 0, transform: 'scale(0)' })),
        style({ opacity: 0 }),
      ],
      { optional: true }
    ),

    query(
      '.SL ',
      [
        style({
          opacity: 0.5,
          'transform-origin': '50% 50%',
          transform: 'scale(1)',
        }),
        group([
          animate(
            '1000ms ease-out',
            style({
              transform: ' scale(25)',
              opacity: 0,
            })
          ),
        ]),
      ],
      { optional: true }
    ),

    /* BACKGROIUND CIRCLE animation */
    query('.limit ', [
      style({
        position: 'absolute',
        top: '10vh',
        opacity: 1,
        width: '100vw',
        height: '90vh',
      }),
    ]),

    query('.backgroudcircle ', [
      style({
        opacity: 0,
        'background-color': 'var(--darker-SL-color)',
      }),
      animate(
        '750ms ease-out',
        style({
          transform: 'scale(200)',
          opacity: 0.8,
        })
      ),
      style({
        opacity: 0,
      }),
    ]),
  ]),
]);

// ANY TO BE Transition
export const anyToBETransition = transition('*=>BE', [
  // HOME TO BE Transition
  group([
    /* SUBTITLE animation */
    query(
      '#subtitle',
      [animate('400ms', style({ opacity: 0 })), style({ opacity: 0 })],
      { optional: true }
    ),

    /* BOXES animation */
    query(
      '.container div',
      [
        animate('200ms', style({ opacity: 0, transform: 'scale(0)' })),
        style({ opacity: 0 }),
      ],
      { optional: true }
    ),

    query(
      '.BE ',
      [
        style({
          opacity: 0.5,
          'transform-origin': '50% 50%',
          transform: 'scale(1)',
        }),
        group([
          animate(
            '1000ms ease-out',
            style({
              transform: ' scale(25)',
              opacity: 0,
            })
          ),
        ]),
      ],
      { optional: true }
    ),

    /* BACKGROIUND CIRCLE animation */
    query('.limit ', [
      style({
        position: 'absolute',
        top: '10vh',
        opacity: 1,
        width: '100vw',
        height: '90vh',
      }),
    ]),

    query('.backgroudcircle ', [
      style({
        opacity: 0,
        'background-color': 'var(--darker-BE-color)',
      }),
      animate(
        '750ms ease-out',
        style({
          transform: 'scale(200)',
          opacity: 0.8,
        })
      ),
      style({
        opacity: 0,
      }),
    ]),
  ]),
]);
