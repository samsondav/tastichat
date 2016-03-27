class ColourGenerator
  GOLDEN_RATIO_CONJUGATE = 0.618033988749895
  SEED = rand

  cattr_accessor :hue do
    Concurrent::Atom.new(SEED) ## GLOBAL VALUE
  end

  # Generates a pleasingly different next color using a global sequence
  # Returns in HEX format e.g. #0F0F0F
  def next_pleasing_colour
    rgb_to_hex(
      hsv_to_rgb(
        next_pleasing_hue, 0.5, 0.95))
  end

  def next_pleasing_hue
    hue.swap do |hue|
      (hue + GOLDEN_RATIO_CONJUGATE) % 1
    end
  end

  private

  # Takes an array like [r, g, b]
  def rgb_to_hex(rgb)
    '#' + rgb.reduce('') do |hex, primary|
      hex + primary.to_s(16)
    end
  end

  # Returns an array of RGB values
  def hsv_to_rgb(h, s, v)
    h_i = (h * 6).to_i
    f = h * 6 - h_i
    p = v * (1 - s)
    q = v * (1 - f*s)
    t = v * (1 - (1 - f) * s)
    r, g, b = v, t, p if h_i == 0
    r, g, b = q, v, p if h_i == 1
    r, g, b = p, v, t if h_i == 2
    r, g, b = p, q, v if h_i == 3
    r, g, b = t, p, v if h_i == 4
    r, g, b = v, p, q if h_i == 5
    [(r * 256).to_i, (g * 256).to_i, (b * 256).to_i]
  end
end

