export default function (done) {
  return (err) => {
    if (err) return done.fail(err);
    else done();
  };
}

