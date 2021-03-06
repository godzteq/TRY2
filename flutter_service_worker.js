'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "86e27ba95541b9b45583bf083dbc67e8",
".git/config": "188502227b0b5e1da776ad207263aebf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "0d5969a35219c336aee9e7b08606cd0e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1bb94d0675a4a56817bda446a5dbd137",
".git/logs/refs/heads/master": "1bb94d0675a4a56817bda446a5dbd137",
".git/logs/refs/remotes/origin/master": "d75adfac365fa71f0e624549bc41263a",
".git/objects/01/b1f95c5258ff29bc1f75c0626fc46b93b8648c": "3777fa6f52c3e0615539e6db9fa299da",
".git/objects/03/d201c2f5850f4627550e520afec144234179b5": "e879038d4839767b070cc3bb239c663e",
".git/objects/07/0ac7691f74166f75f21695b2af7b4eef01b54c": "bf0d1dcf715a41ec28a239a590230f41",
".git/objects/08/6063b3f872dac25956f0439376d5de8c41a7ce": "f6533b8639a261f3fea93a670f255e46",
".git/objects/0c/22fb81887991b701f1ea4d4f4784b34a752af5": "bc309f678a5aa9594a47a93471441c2a",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/15/2aaba174dca1f0b16edefbfda9e0667c494abb": "556c95e067523bb309aef28b087355c9",
".git/objects/15/6d4a109956c1e9eb1f172d4fc26f3f4a18c26f": "47855ee823ec5e091cdeabd41e2082ab",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/19/5c713a4532c40fd0c49c796f7ac24d12113dc5": "477f8ecdc9867c526041ca9502ab4f1d",
".git/objects/19/9e6f2551a63650a3d1d19784cb6814b7c50468": "4bc8f857d3e8737e1420021b41add23b",
".git/objects/1c/d62252311d7f345a276ebde7b0b1a29def799e": "2c9882d4a612c9bd3d8b4db01c82bfd6",
".git/objects/1e/27ad0101d0e96b50a0c429064bb22e4b7a6302": "f025b05eea55017234001d9670e3f69c",
".git/objects/29/70494d7659404dc93855817e476d24a8d3a93f": "e839eb43c7c42d5428c847751ac6204e",
".git/objects/2b/91cc3c5197c51ffcddaccf830f26a03eb7bcb9": "6d6bb2532843756fa08248ed40014d26",
".git/objects/2f/a43fbc42c459d857f47904d2a82179fbbe3186": "dcccd36cd96f06350a5911b2f1d1847e",
".git/objects/34/3a875fdb7b23d528b291e7b36082a744d8ec29": "5e7b37d4f0064da133109765cbb74d8a",
".git/objects/39/2889bf2f2d82d4c2e9a3560ff902ee343ebb06": "33b3ec61d536477e28ffbceef8851ad7",
".git/objects/3b/2700c1d6a043ab43bb9e97e8de1a9671c14360": "0a5a28df8ee7977adf1fea3b82aee85b",
".git/objects/3f/4a1951221265419e46f1b8477d9be7e28eeef4": "1b48bca20054fba243ec0abf4e484920",
".git/objects/43/f3f2532f5d1a9287f9a1ea5c53aa6c392faf7d": "6d9fb2383ea24f9c5e3301910479e05d",
".git/objects/46/11e13dea1e7bb437d66fc30e576ad6eda2cafb": "bc497620d53908393070fcdb9a1202c8",
".git/objects/46/bff552484225f85df8904457118d4cadd13927": "c0213edf7acf5949a1f893cf3f1c49c8",
".git/objects/4c/0847a6a075c533f8bcb1f6b68b2d610e424445": "85065a0be807eb15c6cc83c082c681c2",
".git/objects/4e/3a88394f59455e5185183e7ab25d475ae32fde": "64bfc2cc7853cc39760c58c1d0f1d292",
".git/objects/53/505e3602c230e67d902b59f071861f993630fc": "ede81d9f022d36da41fab146bae6ed41",
".git/objects/54/2e173ba73dfc9c1f39326366c2d884b8626c83": "8564de81a37bfab39b47ef8ed447e1f8",
".git/objects/63/5309132dc6301fe74c7bc8d2793d0a8e13826f": "2834ff75d172e7c6240cbf8838877c82",
".git/objects/63/f31a01d26290469fc279bd0da6d357b7c2140b": "93080720f922062ed01275c9696bf5a1",
".git/objects/6b/54261379f993e55d92e44563da6b186237692d": "f9257926a65f30a873b46e8ef11abc8c",
".git/objects/74/6c2423833c7d2dbcb7bd41a678a6bf585c5a38": "f507d59002a65010d339632cde80fafc",
".git/objects/7a/c7af1d9471773d096ab652712fa198d256b6ec": "75363efe592ecf405ab83a2fc74e7c52",
".git/objects/7f/c511d562c35b5fbeac55e2a7809c2f7ba84eb5": "fea084f3afdc5d7f3d6a6d96905ab94d",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/81/5ffaa14844f098a85f4a6f89ec207688c93f5e": "04f225aa012767b1aa3224a139c01c9c",
".git/objects/82/43cddac019e9c59ad58d94bc49d3798c390e06": "cafb277db4918ca528d7ddb2fbc44f1b",
".git/objects/84/5f54f5a733faafa8d60b3e80d006e2d460ce20": "1b5f2947e5e54f1106df9c48bf10c6f4",
".git/objects/84/cb5a32b85efc67d9177672df8cd913d3ce69a3": "963902c4988f3145e63d82650ed603fe",
".git/objects/93/d4febdf3488521f248f31cb23b6366d69ef47b": "aded8ca185b9556f9d0f2a8d138e87c6",
".git/objects/94/ce8c31693c221589364c07bea336034f5068bb": "788e02f55c06b7ce8c2b555ec7b96333",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/98/dd52aa3bb8659a60e27e31ec1e2cf861d436b7": "c801d62933688c4e41f16e5c308e6131",
".git/objects/9a/e319d79fba88e72ef802ac70ba44e064d388ac": "8ab2a21d0a4a5a4e36706bf92d8a2911",
".git/objects/a1/4fb9956e77227db97ce19a9897fbd166a97529": "b106afc74cb28a2147b8f5da211cd30a",
".git/objects/a9/2f3132a05d43999a14d7b5160738c3a4761499": "11f9bb3b8c4e912f46c228d64e984b19",
".git/objects/a9/d82b7f782a57c3daacf684a56fc0d6d7e24684": "11150fbafcd6713a770d6f1227a46fb7",
".git/objects/ac/149b91d92b9111de992997fc6b8f44819f6c62": "e22b59c9f646f84ffc5b6339b39d11be",
".git/objects/b3/9927a68dd5d9c1d491f91ad2ef36afd89bb444": "6709a30ef39f26eacaa8861379d3d0e0",
".git/objects/b5/ec48606046c16a75279085f594a90509745449": "2e6d59f6f6bf84e302d062fbebd73151",
".git/objects/b7/3b1a279e870f41178e986c80c5337455c75cdc": "316a36a0cdfc7c634627ba7b0b99348e",
".git/objects/b7/5c260af1399389dadc5e07516d7a2abba4eccb": "1be2b66b4bbc1dd5c731d884d9e3a5fd",
".git/objects/bd/729f802b947e6d8c701b01d986e0742d276f8d": "e6df6e69fc3520cbf059a9065545483e",
".git/objects/c3/be717b99df65bd1f05713b4ebb2672a808abae": "4207c97e1c4e5d8a2521170fce01ca75",
".git/objects/c6/1cdcba1476b35f9da0654497c6ff7d40cb8e7f": "5806ada40114d7d89a93eb858e38b35c",
".git/objects/c9/3ae67f4f32d4511b9a5e986507f44ca2b44a2b": "9701fbc0ab4cea3bb5edc4f0e1d74696",
".git/objects/c9/efbb6829f7033e3795ad2e8c7b0aeacf200a32": "4d0463831d8f72af910df2c0a19935f3",
".git/objects/cc/7c6098cbf3b10d81032412ee6c29f9ea6b7d1d": "be79d2ff2912862482e26d312cd36771",
".git/objects/cf/5633994b243dd37c97572458c95f205c82fef3": "a2eeb9abfda9e8018fec1003a4e26658",
".git/objects/d3/0b82a99246b25a13199ecbb12b3e02751e4c50": "0740ddca42763fdad25fe13bd73540eb",
".git/objects/d4/9d39eae8e6d14e7a960d50e3fa52e3e0e24ba6": "6e213e4dbe6edd64bbdbf5a1f42f0d12",
".git/objects/d9/c9c2a7d304430265496d49597398c9210e327e": "8dfc3155acb6f8e8519277ead718b3dc",
".git/objects/db/0fa32468af0910086fb946f9848fe53711273a": "18bf434ce900f86c22b6d929f2a0d222",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/dd/fb7f92146ac4b31dfe5e0a4e0ff6c0b310fe28": "27988232593b64e758624de90047bb47",
".git/objects/e0/5c38514fce4cbf9b8c57f7a03d6175381fe4a6": "3a8382a5b7666759208adeb80372c504",
".git/objects/e1/47b3bcc12e666b629aca22f16545d1e96b551c": "30a799f4dabaa49a0466471d9db7f3e9",
".git/objects/e2/b30c79a8c9fe57bca4796a3253c36856c1b9e0": "dcf7624db34fb6fac796780b18e43d5f",
".git/objects/e5/9f0cae6f69b700551e10949c1a3dd2a140a2d1": "29b626f47673233a6265431f900bb206",
".git/objects/e7/83c262b8002c6d45f0a8a07b81cb342ff6180a": "b7462105a5663d1bead4bfb6ee6e8e37",
".git/objects/ed/b3b083c0c581b637ab280069106bd2c88b798c": "7fab65fc6f58bd18a3bf0607a15ddab6",
".git/objects/f1/408d5d9262583ed6e6103c4ba314aa444349fa": "6d7a5835f5f45dce83065daeb33591ac",
".git/objects/f3/a25fb9f2d247a4bfb3d6f175a2570c6efbdc1d": "390582a6d42ff93cc0af2cf745b66aa8",
".git/objects/f6/23aba302a584e84c97e1dcd22930ff429caaf4": "fb3ebd9de35ecac4dfe9ef43fe01988e",
".git/objects/f7/5a773bffa3a1362efeaa56e8643f127c3f47b9": "d846085c4628a3b56a1453617f477a1d",
".git/objects/f9/54d39736c8b3085fd38260b4f0d644f912dd16": "0481b3a5896c14916600ea34b6a9e0dc",
".git/objects/fb/ae8dbfb0a996c646af7d6b5eb82ab7bb90c83f": "223e4b8a0434fa22d047e57a07d05131",
".git/objects/fd/eb93c34f2c5b8e8de16e687cc58a756d3793ae": "d2657a04909a4ee22e0067c900fb7535",
".git/objects/ff/0079d5d45974253ed69e472712ca75d3f69dcb": "91fc7a8ff469a12240b23c394f06cc64",
".git/refs/heads/master": "b42062a2b69166982995b234a8e66faa",
".git/refs/remotes/origin/master": "b42062a2b69166982995b234a8e66faa",
"assets/AssetManifest.json": "8d284a5acc11a8f1da18b829c681a41b",
"assets/FontManifest.json": "44f237235c0cf4b9af9dbff4414bd740",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/lib/assets/fb.png": "f7dc761a82668c368f9aa1858b1e8301",
"assets/lib/assets/github.png": "1a2d243b81feb305d6e7c08e3b02e3b0",
"assets/lib/assets/insta.png": "82622e4627a264d92fdafb76e17e0502",
"assets/lib/assets/linkedin.png": "f1e3d56e5635dc261d775934f433b63e",
"assets/lib/assets/me.jpg": "e7505c23fb3376365f457ec357640dff",
"assets/lib/assets/pc.png": "0c0e8c0e11055e9cd5c4e7ce39ace715",
"assets/lib/assets/yube.png": "4dbe9a8cba34868a49c517564d176ef5",
"assets/lib/fonts/Raleway-Bold.ttf": "f49f3d2d9df5013c9bfaab7e3d39ee57",
"assets/lib/fonts/Raleway-Light.ttf": "466d154fedd98f85c9deb363ccf859a7",
"assets/lib/fonts/Raleway-Medium.ttf": "bb5ae98e4ce1a64042093dc235c305ed",
"assets/lib/fonts/Raleway-Regular.ttf": "9942588a6c84f959132556d99e83ded6",
"assets/lib/fonts/Raleway-Thin.ttf": "5faedfece17998f456bf5b32b100b597",
"assets/lib/fonts/Rye-Regular.ttf": "da27eb7be7bf58bd221419b3a2ef9db2",
"assets/LICENSE": "9e5c968f0b6369c2deed01ec6e1cfaeb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"CNAME": "b702263362389567d2d1c17cababe9b0",
"favicon.png": "b10d39c0632a132e90157df08f89bae3",
"icons/Icon-192.png": "d10abaef8d237d1fbce5e4ddd2fa1629",
"icons/Icon-512.png": "9a73884ddfd048f459f31104e0bcc486",
"index.html": "f74f157d8cf4cfcf029ce866dc867a57",
"/": "f74f157d8cf4cfcf029ce866dc867a57",
"main.dart.js": "7b9d65d56572be53533a284539530c70",
"manifest.json": "b70009d77d7ad9eb12c5348452aff2eb"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
