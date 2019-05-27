var index = {
  name: 'HeightTransition',
  functional: true,

  render(h, {
    data,
    props,
    children,
    listeners
  }) {
    return h('transition', { ...data,
      props: {
        name: 'height-transition',
        ...props
      },
      on: {
        beforeEnter(el) {
          el.style.height = '0';
        },

        enter(el) {
          el.style.height = el.scrollHeight + 'px';
        },

        afterEnter(el) {
          el.style.height = '';
        },

        beforeLeave(el) {
          el.style.height = el.scrollHeight + 'px';
        },

        leave(el) {
          setTimeout(() => {
            el.style.height = '0';
          });
        },

        afterLeave(el) {
          el.style.height = '';
        },

        ...listeners
      }
    }, children);
  }

};

export default index;
