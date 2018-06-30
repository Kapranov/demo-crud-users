export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('users'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('avatar'),
    this.use('revealUp')
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('render_nested'),
    this.use('revealRight')
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

  this.transition(
    this.fromRoute('avatar'),
    this.toRoute('index'),
    this.use('revealLeft')
  );

  this.transition(
    this.fromRoute('render_nested'),
    this.toRoute('index'),
    this.use('revealLeft')
  );
}
