export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('users'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('users.index'),
    this.toRoute('users.new'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('admin'),
    this.use('fade', { duration: 2000 }),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('admin.roles'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('admin.seeder'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('about'),
    this.use('fade', { duration: 2000 }),
    this.reverse('crossFade')
  );
}
