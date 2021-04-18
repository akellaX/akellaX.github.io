(
    function (ko) {
        const defaultJson = {
            a: 1,
            b: 2,
            c: 3,
            d: 4,
        }
        const defaultJsonArray = JSON.stringify(defaultJson, undefined, 4).split('\n');
        const createDiffArray = (json) => {
            const dmp = new diff_match_patch();
            const diff = dmp.diff_main(JSON.stringify(defaultJson, undefined, 4), JSON.stringify(JSON.parse(json), undefined, 4));
            dmp.diff_cleanupSemantic(diff);

            const diffWithSpans = diff.map((el) => {
                switch (el[0]) {
                    case 0: return el[1]
                    case 1: { 
                        const stringWithSpan = `<span class='green'>${el[1]}</span>`;
                        const brIndex = stringWithSpan.indexOf('\n');
                        if (brIndex > 0) {
                            const strWithEndSpan = stringWithSpan.substring(0, brIndex) + '</span>' + stringWithSpan.substring(brIndex);
                            const newIndex = brIndex + '</span>'.length;
                            const strWithOpenSpan = strWithEndSpan.substring(0, newIndex + 2) + `<span class='green'>` + strWithEndSpan.substring(newIndex + 2)
                            return strWithOpenSpan;
                        }
                        return  stringWithSpan;
                    }
                    case -1: { 
                        const stringWithSpan = `<span class='red'>${el[1]}</span>` ;
                        const brIndex = stringWithSpan.indexOf('\n');
                        if (brIndex > 0) {
                            const strWithEndSpan = stringWithSpan.substring(0, brIndex) + '</span>' + stringWithSpan.substring(brIndex);
                            const newIndex = brIndex + '</span>'.length;
                            const strWithOpenSpan = strWithEndSpan.substring(0, newIndex + 2) + `<span class='red'>` + strWithEndSpan.substring(newIndex + 2)
                            return strWithOpenSpan;
                        }
                        return  stringWithSpan;
                    }
                    default: return el[1]
                }
            })

            const stringDiff = diffWithSpans.join('');

            return stringDiff.split('\n').map((el) => {
                return {
                    text: el
                }
            })

        }
        const Model = function () {
            const self = this;
            self.json = ko.observable(JSON.stringify(defaultJson, undefined, 4));
            self.diffArray = ko.observableArray(createDiffArray(self.json()));
            self.onSubmit = () => {
                self.diffArray(createDiffArray(self.json()))
            };
        }
        ko.applyBindings(new Model());
    })(ko)
