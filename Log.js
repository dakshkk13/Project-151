// Registering component in log-component.js
AFRAME.registerComponent('log', {
    schema: {
      message: {type: 'string', default: 'Hello, World!'}
    },
    init: function () {
        console.log(this.data.message);
      }
  });

AFRAME.registerComponent('movement',{
  schema:{
    moveX: {type: 'number', default: 1}
  },
  tick: function () {
    this.data.moveX += 0.01
    var pos = this.el.getAttribute("position")
    pos.x = this.data.moveX
    this.el.setAttribute('position',{x:pos.x,y:pos.y,z:pos.z})
  }
})
