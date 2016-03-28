# frozen_string_literal: true

# A simple class that represents a fruit warrior
class FruitWarrior
  WARRIOR_NAMES = {
    banana: 'Takeda Banana',
    blueberries: 'Tokugawa Duo',
    lemon: 'Miyamoto Lemon',
    pear: 'Hattori Pear',
    pineapple: 'Shimazu Pineapple'
  }.freeze

  FIRST_FRUIT = rand(5)

  cattr_accessor :fruit_index do
    Concurrent::Atom.new(FIRST_FRUIT) ## GLOBAL VALUE
  end

  attr_reader :fruit
  attr_reader :name

  def self.next
    idx = fruit_index.swap do |idx|
      (idx + 1) % 5
    end
    new(idx)
  end

  def self.fruits
    WARRIOR_NAMES.keys
  end

  # Initialize with an index from 0 to 4
  # Fruits are immutable
  def initialize(idx)
    @fruit, @name = WARRIOR_NAMES.to_a[idx]
    freeze
  end

  def as_json
    {
      fruit: fruit,
      name: name
    }
  end
end
