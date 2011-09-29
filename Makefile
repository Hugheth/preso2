.PHONY: dist

dist:
	rm -r dist/latest
	mkdir dist/latest
	cp src/present.html dist/latest/present.tid
	cp src/*.meta dist/latest/
	cp src/*.recipe dist/latest/
	cd src && cat purecssmatrix.js sylvester.js jquery.animtrans.js jquery.zoomooz.js jquery.touche.js cecily.js  > ../dist/latest/preso2.js.js
	cd src && cat zoomooz.css cecily.css > ../dist/latest/preso2.css
