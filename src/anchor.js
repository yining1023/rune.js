(function(Rune) {

  Rune.MOVE = "move"
  Rune.LINE = "line"
  Rune.CUBIC = "cubic"
  Rune.QUAD = "quad"

  var Anchor = Rune.Anchor = function() {
    this.relative = false;
  };

  // Constructors
  // --------------------------------------------------

  _.extend(Anchor.prototype, {

    setMove: function(x, y, relative) {
      this.command = Rune.MOVE;
      this.vec1 = new Rune.Vector(x, y);
      this.relative = !!relative;
      return this;
    },

    setLine: function(x, y, relative) {
      this.command = Rune.LINE;
      this.vec1 = new Rune.Vector(x, y);
      this.relative = !!relative;
      return this;
    },

    setCurve: function(a, b, c, d, e, f, g) {

      if(a == Rune.QUAD) {
        this.command = Rune.QUAD;
        this.vec1 = new Rune.Vector(b, c);
        if(_.isNumber(d)) {
          this.vec2 = new Rune.Vector(d, e);
          if(f) this.relative = true;
        } else {
          if(d) this.relative = true;
        }
      } else {
        this.command = Rune.CUBIC;
        this.vec1 = new Rune.Vector(a, b);
        this.vec2 = new Rune.Vector(c, d);
        if(_.isNumber(e)) {
          this.vec3 = new Rune.Vector(e, f);
          if(g) this.relative = true;
        } else {
          if(e === true) this.relative = true;
        }
      }

      return this;
    }

  });

})(Rune);