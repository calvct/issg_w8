const crypto = require("crypto");

const senderPrivateKeyPem = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC83p7A+YNFkR/J
JKas49glR2UQuw8Qde2pgskiZ0N71Jvk8DgEtHUCDEvKHxEG8aTx4HGAz/jtML+P
aHFwZ0Z1UT1psYVcvjS3+7tUJp0p/sWVKkLrUFx6Tvd5+aUoXYoG5HPPB1hc3pcX
6fE8lQxZS4LCfrsuJGTEcON+MbIGPp2gYbMAVTG452zcpBKSy0nl3ye/fAAC3EBj
7XpPLT8BRW66anS8ypsjT/Lt6+dO62+qYggmV3jMAQBgH9jLzTZkTKcJTqqDkCZa
pC1UhkRMa6I5jf/uuzkPzvkw9e2zPOLZ017ZImoJWpkDrd4n/e61L74SgqwYPy3H
LGnq7L6vAgMBAAECggEAPsvOAN909AZiiSA0grtmvE5Wng9z3Mc48+lWMqge2edA
xgfQuE+/r6Si9lsJ8EMb0ogLdQaw/zv8FRRm0zajSJJwVtn9O27KXHnIORx1mObq
jsP0aATaGphy1A1bCma/Y7dFggoxKP+hQQQ5fykXaAEhQsWcOqVDE8Vs/iJLzKMm
0Po68G/8nJkNSLIboDrcLlyqk/0P6/T35rk1GDK9vHqH337nKgqVTsda/KSkbKth
vKo/XT2pbSwtFSX4lhURhma8a1dBdOj5ytCJZgWbvXlqVvPjK8pSpAQbwMM3D/1U
Hx+UjIieDnszGfwvVqOxN9sFun2QB2prLtA68dc4oQKBgQDcfmN5Sk/dvX7CSNkz
RnnKB0vk1r1bhVykSFhazq60BghFQ8TFvm5tLv6mUzpjFM8+Rm7bHhXen7kzoRes
lKld8XdxG1bM3CNlFuaf6pkLLzxfPgfdehZDki2qOSZ2cuF3ddN5JACYJSZ4Jc8O
3+NjKE7kG6/TLG1WXa14ZJt/dwKBgQDbSJAYjIOivLkHCoGs3prmO0jV1AxNHcjg
Co7B65h7/91cSYYYh/YpwYJdH2ivzG2m/hEoYsc40KWSyXnIrnA9KbsGfPmSXhvq
vUNdizXI4SjfZdhlbQmLa9WFhJHV0A9tyDHDBkz0FxVaKXf4oHC73ZBzE5GdEBIB
OOkzJqi4iQKBgQDAYysqZpO/N5uFrAiQO9sCU1F+L3xzga6uzU0ClrpK68SFozbr
D1jMvaeFurMERuD5Rn1thRex8w2mpdXBSMlq5cjBEQiwoRflGZFLUWgOIT39IGO+
dMs+VCqyD0GnMl/WWyGU3rwCBNBHHz5GjUWbfE0xrZLBoE8af4xfsvEWywKBgB7u
EUUlLLwbmo2fscLMc1TeL9vZWRLXjKntU02PCacT5AlMZZm4M8SYAudXstB5KU5Q
r+Lea/Nbmr8lpAPmdvZpmHPF1P4MQCvQHlxncmKvP7CjEO7dfmcoAqoelONvwX1e
q4YysVAMoXpiNwXeu4gELIfOzs80oRWDDYGlhk7hAoGAZQUWNP+Ys6tSow1gndbk
PggVxS1cTwTSyviFkAB4kt6vEmp0bCWDxiWy8Iv/jr7J9OHqssWp8N/EKx6Fnys9
5oVhcqXxYuTSn8r3HPJw1ouRfgqLzHMQqiCiQfQlJS5b423frb0m8taYGGgxgKiz
Fi29Xc2R3QJ52vv55gBLajE=
-----END PRIVATE KEY-----`;

const senderPrivateKey = crypto.createPrivateKey(senderPrivateKeyPem);

const recipientPublicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvN6ewPmDRZEfySSmrOPY
JUdlELsPEHXtqYLJImdDe9Sb5PA4BLR1AgxLyh8RBvGk8eBxgM/47TC/j2hxcGdG
dVE9abGFXL40t/u7VCadKf7FlSpC61Bcek73efmlKF2KBuRzzwdYXN6XF+nxPJUM
WUuCwn67LiRkxHDjfjGyBj6doGGzAFUxuOds3KQSkstJ5d8nv3wAAtxAY+16Ty0/
AUVuump0vMqbI0/y7evnTutvqmIIJld4zAEAYB/Yy802ZEynCU6qg5AmWqQtVIZE
TGuiOY3/7rs5D875MPXtszzi2dNe2SJqCVqZA63eJ/3utS++EoKsGD8txyxp6uy+
rwIDAQAB
-----END PUBLIC KEY-----`;

const recipientPublicKey = crypto.createPublicKey(recipientPublicKeyPem);

const message = "I want some apples";
const data = Buffer.from(message);

const signature = crypto.sign("sha256", data, senderPrivateKey);
console.log("Signature:", signature.toString("hex"));

const ciphertext = crypto.publicEncrypt(recipientPublicKey, data);
console.log("Message:", ciphertext.toString("hex"));
