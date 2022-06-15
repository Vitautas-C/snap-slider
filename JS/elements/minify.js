function convert(d, f, g) { let b = 0; for (let c = 0; c < d.length; c++)b += f.length ** c * f.indexOf(d[d.length - c - 1]); let e = g.length, a = 1; for (; a * e <= +b;)a *= e; let h = ""; for (; a >= 1;)h += g[Math.floor(b / a)], b %= a, a /= e; return h }

function convert(input, source, target) {
  let value = 0
  for (let i = 0; i < input.length; i++) {
    value += source.length ** i * source.indexOf(input[input.length - i - 1])
  }
  const base = target.length
  let multiplier = 1
  while (multiplier * base <= +value) multiplier *= base
  let result = ""
  while (multiplier >= 1) {
    result += target[Math.floor(value / multiplier)]
    value %= multiplier
    multiplier /= base
  }
  return result
}

/////////////////////////////////////////////////////////////////////////
class Person { constructor(a = "John", b = "Doe", c = 0, d = "Male") { this.firstName = a, this.lastName = b, this.age = c, this.gender = d } sayFullName() { return this.firstName + " " + this.lastName } static greetExtraTerrestrials(a) { return `Welcome to Planet Earth ${a}` } }


class Person {

}