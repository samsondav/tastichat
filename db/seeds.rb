Message.delete_all

Message.create!(
  body: 'Our arch-enemies the Dutch Daimyo Vegetables have struck again!',
  fruit: 'pineapple',
  sent_at: Time.zone.parse('1635-03-04 13:45')
)

Message.create!(
  body: 'We must strike back at once and destroy those dutch dogs!',
  fruit: 'blueberries',
  sent_at: Time.zone.parse('1635-03-04 13:46')
)

Message.create!(
  body: 'Where should we meet to plan our attack?',
  fruit: 'lemon',
  sent_at: Time.zone.parse('1635-03-04 13:47')
)
