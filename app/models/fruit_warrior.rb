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

  WARRIOR_COLOURS = {
    banana: '#FFE135',
    blueberries: '#4F86F7',
    lemon: '#E9FF36',
    orange: '#FF4500',
    pineapple: '#614126'
  }

  FIRST_FRUIT = rand(5)

  cattr_accessor :fruit_index do
    Concurrent::Atom.new(FIRST_FRUIT) ## GLOBAL VALUE
  end

  attr_reader :fruit
  attr_reader :name
  attr_reader :colour

  def self.next
    idx = fruit_index.swap do |idx|
      (idx + 1) % 5
    end
    new(name_from_index(idx))
  end

  def self.fruits
    WARRIOR_NAMES.keys
  end

  def self.all
    fruits.map do |fruit|
      new(fruit)
    end
  end

  def self.all_keyed_by_fruit
    WARRIOR_NAMES.map do |fruit, _name|
      [fruit, new(fruit)]
    end.to_h
  end

  def self.name_from_index(idx)
    WARRIOR_NAMES.to_a[idx][0]
  end

  # Initialize with the fruit name
  # Fruits are immutable
  def initialize(fruit)
    @fruit = fruit
    @name = WARRIOR_NAMES[@fruit]
    @colour = WARRIOR_COLOURS[@fruit]
    freeze
  end

  def as_json
    {
      fruit: fruit,
      name: name,
      colour: colour
    }
  end
end
