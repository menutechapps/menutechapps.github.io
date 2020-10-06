app.get('/s5', (req,res) => {
    let month = res.locals.ctMonth;
    let year = res.locals.ctYear;
    Click.findAll({
        where: {
            [Op.and]: [
                { month: month },
                { year: year }
            ]
        }
    }).then(clicks => {

        let cd1 = clicks.filter((cli, index, array) => cli.day == '01' && cli.property == 'user');
        let fcd1;
        let nfcd1;
        let qntcd1;
        if (cd1 == null) {
            qntcd1 = 0;
        } else {
            fcd1 = cd1.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            nfcd1 = (fcd1).toFixed(2);
            qntcd1 = cd1.length;
        }

        let cd2 = clicks.filter((cli, index, array) => cli.day == '02' && cli.property == 'user');
        let fcd2;
        let nfcd2;
        let qntcd2;
        if (cd2 == null) {
            qntcd2 = 0;
        } else {
            fcd2 = cd2.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            nfcd2 = (fcd2).toFixed(2);
            qntcd2 = cd2.length;
        }

        let cd3 = clicks.filter((cli, index, array) => cli.day == '03' && cli.property == 'user');
        let fcd3;
        let nfcd3;
        let qntcd3;
        if (cd3 == null) {
            qntcd3 = 0;
        } else {
            fcd3 = cd3.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            nfcd3 = (fcd3).toFixed(2);
            qntcd3 = cd3.length;
        }

        let cd4 = clicks.filter((cli, index, array) => cli.day == '04' && cli.property == 'user');
        let fcd4;
        let nfcd4;
        let qntcd4;
        if (cd4 == null) {
            qntcd4 = 0;
        } else {
            fcd4 = cd4.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            nfcd4 = (fcd4).toFixed(2);
            qntcd4 = cd4.length;
        }

        let cd5 = clicks.filter((cli, index, array) => cli.day == '05' && cli.property == 'user');
        let fcd5;
        let nfcd5;
        let qntcd5;
        if (cd5 == null) {
            qntcd5 = 0;
        } else {
            fcd5 = cd5.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            nfcd5 = (fcd5).toFixed(2);
            qntcd5 = cd5.length;
        }

        let cd6 = clicks.filter((cli, index, array) => cli.day == '06' && cli.property == 'user');
        let fcd6;
        let nfcd6;
        let qntcd6;
        if (cd6 == null) {
            qntcd6 = 0;
        } else {
            fcd6 = cd6.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            nfcd6 = (fcd6).toFixed(2);
            qntcd6 = cd6.length;
        }

        let cd7 = clicks.filter((cli, index, array) => cli.day == '07' && cli.property == 'user');
        let fcd7;
        let nfcd7;
        let qntcd7;
        if (cd7 == null) {
            qntcd7 = 0;
        } else {
            fcd7 = cd7.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            nfcd7 = (fcd7).toFixed(2)
            qntcd7 = cd7.length;
        }

        let cd8 = clicks.filter((cli, index, array) => cli.day == '08' && cli.property == 'user');
        let fcd8;
        let nfcd8;
        let qntcd8;
        if (cd8 == null) {
            qntcd8 = 0;
        } else {
            fcd8 = cd8.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            nfcd8 = (fcd8).toFixed(2);
            qntcd8 = cd8.length;
        }

        let cd9 = clicks.filter((cli, index, array) => cli.day == '09' && cli.property == 'user');
        let fcd9;
        let nfcd9;
        let qntcd9;
        if (cd9 == null) {
            qntcd9 = 0;
        } else {
            fcd9 = cd9.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            nfcd9 = (fcd9).toFixed(2);
            qntcd9 = cd9.length;
        }

        let cd10 = clicks.filter((cli, index, array) => cli.day == '10' && cli.property == 'user');
        let fcd10;
        let nfcd10;
        let qntcd10;
        if (cd10 == null) {
            qntcd10 = 0;
        } else {
            fcd10 = cd10.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            nfcd10 = (fcd10).toFixed(2);
            qntcd10 = cd10.length;
        }

        let cd11 = clicks.filter((cli, index, array) => cli.day == '11' && cli.property == 'user');
        let fcd11;
        let nfcd11;
        let qntcd11;
        if (cd11 == null) {
            qntcd11 = 0;
        } else {
            fcd11 = cd11.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            nfcd11 = (fcd11).toFixed(2);
            qntcd11 = cd11.length;
        }

        let cd12 = clicks.filter((cli, index, array) => cli.day == '12' && cli.property == 'user');
        let fcd12;
        let nfcd12;
        let qntcd12;
        if (cd12 == null) {
            qntcd12 = 0;
        } else {
            fcd12 = cd12.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            nfcd12 = (fcd12).toFixed(2);
            qntcd12 = cd12.length;
        }

        let cd13 = clicks.filter((cli, index, array) => cli.day == '13' && cli.property == 'user');
        let fcd13;
        let nfcd13;
        let qntcd13;
        if (cd13 == null) {
            qntcd13 = 0;
        } else {
            fcd13 = cd13.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            nfcd13 = (fcd13).toFixed(2);
            qntcd13 = cd13.length;
        }

        let cd14 = clicks.filter((cli, index, array) => cli.day == '14' && cli.property == 'user');
        let fcd14;
        let nfcd14;
        let qntcd14;
        if (cd14 == null) {
            qntcd14 = 0;
        } else {
            fcd14 = cd14.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            nfcd14 = (fcd14).toFixed(2);
            qntcd14 = cd14.length;
        }

        let cd15 = clicks.filter((cli, index, array) => cli.day == '15' && cli.property == 'user');
        let fcd15;
        let nfcd15;
        let qntcd15;
        if (cd15 == null) {
            qntcd15 = 0;
        } else {
            fcd15 = cd15.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            nfcd15 = (fcd15).toFixed(2);
            qntcd15 = cd15.length;
        }

        let cd16 = clicks.filter((cli, index, array) => cli.day == '16' && cli.property == 'user');
        let fcd16;
        let nfcd16;
        let qntcd16;
        if (cd16 == null) {
            qntcd16 = 0;
        } else {
            fcd16 = cd16.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            nfcd16 = (fcd16).toFixed(2);
            qntcd16 = cd16.length;
        }

        let cd17 = clicks.filter((cli, index, array) => cli.day == '17' && cli.property == 'user');
        let fcd17;
        let nfcd17;
        let qntcd17;
        if (cd17 == null) {
            qntcd17 = 0;
        } else {
            fcd17 = cd17.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            nfcd17 = (fcd17).toFixed(2)
            qntcd17 = cd17.length;
        }

        let cd18 = clicks.filter((cli, index, array) => cli.day == '18' && cli.property == 'user');
        let fcd18;
        let nfcd18;
        let qntcd18;
        if (cd18 == null) {
            qntcd18 = 0;
        } else {
            fcd18 = cd18.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            nfcd18 = (fcd18).toFixed(2);
            qntcd18 = cd18.length;
        }

        let cd19 = clicks.filter((cli, index, array) => cli.day == '19' && cli.property == 'user');
        let fcd19;
        let nfcd19;
        let qntcd19;
        if (cd19 == null) {
            qntcd19 = 0;
        } else {
            fcd19 = cd19.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            nfcd19 = (fcd19).toFixed(2);
            qntcd19 = cd19.length;
        }

        let cd20 = clicks.filter((cli, index, array) => cli.day == '20' && cli.property == 'user');
        let fcd20;
        let nfcd20;
        let qntcd20;
        if (cd20 == null) {
            qntcd20 = 0;
        } else {
            fcd20 = cd20.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            nfcd20 = (fcd20).toFixed(2);
            qntcd20 = cd20.length;
        }

        let cd21 = clicks.filter((cli, index, array) => cli.day == '21' && cli.property == 'user');
        let fcd21;
        let nfcd21;
        let qntcd21;
        if (cd21 == null) {
            qntcd21 = 0;
        } else {
            fcd21 = cd21.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            nfcd21 = (fcd21).toFixed(2);
            qntcd21 = cd21.length;
        }

        let cd22 = clicks.filter((cli, index, array) => cli.day == '22' && cli.property == 'user');
        let fcd22;
        let nfcd22;
        let qntcd22;
        if (cd22 == null) {
            qntcd22 = 0;
        } else {
            fcd22 = cd22.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            nfcd22 = (fcd22).toFixed(2);
            qntcd22 = cd22.length;
        }

        let cd23 = clicks.filter((cli, index, array) => cli.day == '23' && cli.property == 'user');
        let fcd23;
        let nfcd23;
        let qntcd23;
        if (cd23 == null) {
            qntcd23 = 0;
        } else {
            fcd23 = cd23.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            nfcd23 = (fcd23).toFixed(2);
            qntcd23 = cd23.length;
        }

        let cd24 = clicks.filter((cli, index, array) => cli.day == '24' && cli.property == 'user');
        let fcd24;
        let nfcd24;
        let qntcd24;
        if (cd24 == null) {
            qntcd24 = 0;
        } else {
            fcd24 = cd24.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            nfcd24 = (fcd24).toFixed(2);
            qntcd24 = cd24.length;
        }

        let cd25 = clicks.filter((cli, index, array) => cli.day == '25' && cli.property == 'user');
        let fcd25;
        let nfcd25;
        let qntcd25;
        if (cd25 == null) {
            qntcd25 = 0;
        } else {
            fcd25 = cd25.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            nfcd25 = (fcd25).toFixed(2);
            qntcd25 = cd25.length;
        }

        let cd26 = clicks.filter((cli, index, array) => cli.day == '26' && cli.property == 'user');
        let fcd26;
        let nfcd26;
        let qntcd26;
        if (cd26 == null) {
            qntcd26 = 0;
        } else {
            fcd26 = cd26.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            nfcd26 = (fcd26).toFixed(2);
            qntcd26 = cd26.length;
        }

        let cd27 = clicks.filter((cli, index, array) => cli.day == '27' && cli.property == 'user');
        let fcd27;
        let nfcd27;
        let qntcd27;
        if (cd27 == null) {
            qntcd27 = 0;
        } else {
            fcd27 = cd27.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            nfcd27 = (fcd27).toFixed(2)
            qntcd27 = cd27.length;
        }

        let cd28 = clicks.filter((cli, index, array) => cli.day == '28' && cli.property == 'user');
        let fcd28;
        let nfcd28;
        let qntcd28;
        if (cd28 == null) {
            qntcd28 = 0;
        } else {
            fcd28 = cd28.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            nfcd28 = (fcd28).toFixed(2);
            qntcd28 = cd28.length;
        }

        let cd29 = clicks.filter((cli, index, array) => cli.day == '29' && cli.property == 'user');
        let fcd29;
        let nfcd29;
        let qntcd29;
        if (cd29 == null) {
            qntcd29 = 0;
        } else {
            fcd29 = cd29.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            nfcd29 = (fcd29).toFixed(2);
            qntcd29 = cd29.length;
        }

        let cd30 = clicks.filter((cli, index, array) => cli.day == '30' && cli.property == 'user');
        let fcd30;
        let nfcd30;
        let qntcd30;
        if (cd30 == null) {
            qntcd30 = 0;
        } else {
            fcd30 = cd30.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            nfcd30 = (fcd30).toFixed(2);
            qntcd30 = cd30.length;
        }

        let cd31 = clicks.filter((cli, index, array) => cli.day == '31' && cli.property == 'user');
        let fcd31;
        let nfcd31;
        let qntcd31;
        if (cd31 == null) {
            qntcd31 = 0;
        } else {
            fcd31 = cd31.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            nfcd31 = (fcd31).toFixed(2);
            qntcd31 = cd31.length;
        }

        let cdays = qntcd1 + ',' + qntcd2 + ',' + qntcd3 + ',' + qntcd4 + ',' + qntcd5 + ',' + qntcd6 + ',' + qntcd7 + ',' + qntcd8 + ',' + qntcd9 + ',' + qntcd10 + ',' + qntcd11 + ',' + qntcd12 + ',' + qntcd13 + ',' + qntcd14 + ',' + qntcd15 + ',' + qntcd16 + ',' + qntcd17 + ',' + qntcd18 + ',' + qntcd19 + ',' + qntcd20 + ',' + qntcd21 + ',' + qntcd22 + ',' + qntcd23 + ',' + qntcd24 + ',' + qntcd25 + ',' + qntcd26 + ',' + qntcd27 + ',' + qntcd28 + ',' +  qntcd29 + ',' + qntcd30 + ',' + qntcd31;

        //////////////////////////////////////////////////////////////////////////////

        let acd1 = clicks.filter((cli, index, array) => cli.day == '01' && cli.property == 'adm');
        let afacd1;
        let anafacd1;
        let aqntacd1;
        if (acd1 == null) {
            anafacd1 = '0.00';
            aqntacd1 = 0;
        } else {
            afacd1 = acd1.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            anafacd1 = (afacd1).toFixed(2);
            aqntacd1 = acd1.length;
        }

        let acd2 = clicks.filter((cli, index, array) => cli.day == '02' && cli.property == 'adm');
        let afacd2;
        let anafacd2;
        let aqntacd2;
        if (acd2 == null) {
            anafacd2 = '0.00';
            aqntacd2 = 0;
        } else {
            afacd2 = acd2.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            anafacd2 = (afacd2).toFixed(2);
            aqntacd2 = acd2.length;
        }

        let acd3 = clicks.filter((cli, index, array) => cli.day == '03' && cli.property == 'adm');
        let afacd3;
        let anafacd3;
        let aqntacd3;
        if (acd3 == null) {
            anafacd3 = '0.00';
            aqntacd3 = 0;
        } else {
            afacd3 = acd3.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            anafacd3 = (afacd3).toFixed(2);
            aqntacd3 = acd3.length;
        }

        let acd4 = clicks.filter((cli, index, array) => cli.day == '04' && cli.property == 'adm');
        let afacd4;
        let anafacd4;
        let aqntacd4;
        if (acd4 == null) {
            anafacd4 = '0.00';
            aqntacd4 = 0;
        } else {
            afacd4 = acd4.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            anafacd4 = (afacd4).toFixed(2);
            aqntacd4 = acd4.length;
        }

        let acd5 = clicks.filter((cli, index, array) => cli.day == '05' && cli.property == 'adm');
        let afacd5;
        let anafacd5;
        let aqntacd5;
        if (acd5 == null) {
            anafacd5 = '0.00';
            aqntacd5 = 0;
        } else {
            afacd5 = acd5.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            anafacd5 = (afacd5).toFixed(2);
            aqntacd5 = acd5.length;
        }

        let acd6 = clicks.filter((cli, index, array) => cli.day == '06' && cli.property == 'adm');
        let afacd6;
        let anafacd6;
        let aqntacd6;
        if (acd6 == null) {
            anafacd6 = '0.00';
            aqntacd6 = 0;
        } else {
            afacd6 = acd6.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            anafacd6 = (afacd6).toFixed(2);
            aqntacd6 = acd6.length;
        }

        let acd7 = clicks.filter((cli, index, array) => cli.day == '07' && cli.property == 'adm');
        let afacd7;
        let anafacd7;
        let aqntacd7;
        if (acd7 == null) {
            anafacd7 = '0.00';
            aqntacd7 = 0;
        } else {
            afacd7 = acd7.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            anafacd7 = (afacd7).toFixed(2)
            aqntacd7 = acd7.length;
        }

        let acd8 = clicks.filter((cli, index, array) => cli.day == '08' && cli.property == 'adm');
        let afacd8;
        let anafacd8;
        let aqntacd8;
        if (acd8 == null) {
            anafacd8 = '0.00';
            aqntacd8 = 0;
        } else {
            afacd8 = acd8.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            anafacd8 = (afacd8).toFixed(2);
            aqntacd8 = acd8.length;
        }

        let acd9 = clicks.filter((cli, index, array) => cli.day == '09' && cli.property == 'adm');
        let afacd9;
        let anafacd9;
        let aqntacd9;
        if (acd9 == null) {
            anafacd9 = '0.00';
            aqntacd9 = 0;
        } else {
            afacd9 = acd9.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            anafacd9 = (afacd9).toFixed(2);
            aqntacd9 = acd9.length;
        }

        let acd10 = clicks.filter((cli, index, array) => cli.day == '10' && cli.property == 'adm');
        let afacd10;
        let anafacd10;
        let aqntacd10;
        if (acd10 == null) {
            anafacd10 = '0.00';
            aqntacd10 = 0;
        } else {
            afacd10 = acd10.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            anafacd10 = (afacd10).toFixed(2);
            aqntacd10 = acd10.length;
        }

        let acd11 = clicks.filter((cli, index, array) => cli.day == '11' && cli.property == 'adm');
        let afacd11;
        let anafacd11;
        let aqntacd11;
        if (acd11 == null) {
            anafacd11 = '0.00';
            aqntacd11 = 0;
        } else {
            afacd11 = acd11.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            anafacd11 = (afacd11).toFixed(2);
            aqntacd11 = acd11.length;
        }

        let acd12 = clicks.filter((cli, index, array) => cli.day == '12' && cli.property == 'adm');
        let afacd12;
        let anafacd12;
        let aqntacd12;
        if (acd12 == null) {
            anafacd12 = '0.00';
            aqntacd12 = 0;
        } else {
            afacd12 = acd12.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            anafacd12 = (afacd12).toFixed(2);
            aqntacd12 = acd12.length;
        }

        let acd13 = clicks.filter((cli, index, array) => cli.day == '13' && cli.property == 'adm');
        let afacd13;
        let anafacd13;
        let aqntacd13;
        if (acd13 == null) {
            anafacd13 = '0.00';
            aqntacd13 = 0;
        } else {
            afacd13 = acd13.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            anafacd13 = (afacd13).toFixed(2);
            aqntacd13 = acd13.length;
        }

        let acd14 = clicks.filter((cli, index, array) => cli.day == '14' && cli.property == 'adm');
        let afacd14;
        let anafacd14;
        let aqntacd14;
        if (acd14 == null) {
            anafacd14 = '0.00';
            aqntacd14 = 0;
        } else {
            afacd14 = acd14.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            anafacd14 = (afacd14).toFixed(2);
            aqntacd14 = acd14.length;
        }

        let acd15 = clicks.filter((cli, index, array) => cli.day == '15' && cli.property == 'adm');
        let afacd15;
        let anafacd15;
        let aqntacd15;
        if (acd15 == null) {
            anafacd15 = '0.00';
            aqntacd15 = 0;
        } else {
            afacd15 = acd15.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            anafacd15 = (afacd15).toFixed(2);
            aqntacd15 = acd15.length;
        }

        let acd16 = clicks.filter((cli, index, array) => cli.day == '16' && cli.property == 'adm');
        let afacd16;
        let anafacd16;
        let aqntacd16;
        if (acd16 == null) {
            anafacd16 = '0.00';
            aqntacd16 = 0;
        } else {
            afacd16 = acd16.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            anafacd16 = (afacd16).toFixed(2);
            aqntacd16 = acd16.length;
        }

        let acd17 = clicks.filter((cli, index, array) => cli.day == '17' && cli.property == 'adm');
        let afacd17;
        let anafacd17;
        let aqntacd17;
        if (acd17 == null) {
            anafacd17 = '0.00';
            aqntacd17 = 0;
        } else {
            afacd17 = acd17.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            anafacd17 = (afacd17).toFixed(2)
            aqntacd17 = acd17.length;
        }

        let acd18 = clicks.filter((cli, index, array) => cli.day == '18' && cli.property == 'adm');
        let afacd18;
        let anafacd18;
        let aqntacd18;
        if (acd18 == null) {
            anafacd18 = '0.00';
            aqntacd18 = 0;
        } else {
            afacd18 = acd18.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            anafacd18 = (afacd18).toFixed(2);
            aqntacd18 = acd18.length;
        }

        let acd19 = clicks.filter((cli, index, array) => cli.day == '19' && cli.property == 'adm');
        let afacd19;
        let anafacd19;
        let aqntacd19;
        if (acd19 == null) {
            anafacd19 = '0.00';
            aqntacd19 = 0;
        } else {
            afacd19 = acd19.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            anafacd19 = (afacd19).toFixed(2);
            aqntacd19 = acd19.length;
        }

        let acd20 = clicks.filter((cli, index, array) => cli.day == '20' && cli.property == 'adm');
        let afacd20;
        let anafacd20;
        let aqntacd20;
        if (acd20 == null) {
            anafacd20 = '0.00';
            aqntacd20 = 0;
        } else {
            afacd20 = acd20.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            anafacd20 = (afacd20).toFixed(2);
            aqntacd20 = acd20.length;
        }

        let acd21 = clicks.filter((cli, index, array) => cli.day == '21' && cli.property == 'adm');
        let afacd21;
        let anafacd21;
        let aqntacd21;
        if (acd21 == null) {
            anafacd21 = '0.00';
            aqntacd21 = 0;
        } else {
            afacd21 = acd21.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            anafacd21 = (afacd21).toFixed(2);
            aqntacd21 = acd21.length;
        }

        let acd22 = clicks.filter((cli, index, array) => cli.day == '22' && cli.property == 'adm');
        let afacd22;
        let anafacd22;
        let aqntacd22;
        if (acd22 == null) {
            anafacd22 = '0.00';
            aqntacd22 = 0;
        } else {
            afacd22 = acd22.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            anafacd22 = (afacd22).toFixed(2);
            aqntacd22 = acd22.length;
        }

        let acd23 = clicks.filter((cli, index, array) => cli.day == '23' && cli.property == 'adm');
        let afacd23;
        let anafacd23;
        let aqntacd23;
        if (acd23 == null) {
            anafacd23 = '0.00';
            aqntacd23 = 0;
        } else {
            afacd23 = acd23.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            anafacd23 = (afacd23).toFixed(2);
            aqntacd23 = acd23.length;
        }

        let acd24 = clicks.filter((cli, index, array) => cli.day == '24' && cli.property == 'adm');
        let afacd24;
        let anafacd24;
        let aqntacd24;
        if (acd24 == null) {
            anafacd24 = '0.00';
            aqntacd24 = 0;
        } else {
            afacd24 = acd24.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            anafacd24 = (afacd24).toFixed(2);
            aqntacd24 = acd24.length;
        }

        let acd25 = clicks.filter((cli, index, array) => cli.day == '25' && cli.property == 'adm');
        let afacd25;
        let anafacd25;
        let aqntacd25;
        if (acd25 == null) {
            anafacd25 = '0.00';
            aqntacd25 = 0;
        } else {
            afacd25 = acd25.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            anafacd25 = (afacd25).toFixed(2);
            aqntacd25 = acd25.length;
        }

        let acd26 = clicks.filter((cli, index, array) => cli.day == '26' && cli.property == 'adm');
        let afacd26;
        let anafacd26;
        let aqntacd26;
        if (acd26 == null) {
            anafacd26 = '0.00';
            aqntacd26 = 0;
        } else {
            afacd26 = acd26.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            anafacd26 = (afacd26).toFixed(2);
            aqntacd26 = acd26.length;
        }

        let acd27 = clicks.filter((cli, index, array) => cli.day == '27' && cli.property == 'adm');
        let afacd27;
        let anafacd27;
        let aqntacd27;
        if (acd27 == null) {
            anafacd27 = '0.00';
            aqntacd27 = 0;
        } else {
            afacd27 = acd27.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            anafacd27 = (afacd27).toFixed(2)
            aqntacd27 = acd27.length;
        }

        let acd28 = clicks.filter((cli, index, array) => cli.day == '28' && cli.property == 'adm');
        let afacd28;
        let anafacd28;
        let aqntacd28;
        if (acd28 == null) {
            anafacd28 = '0.00';
            aqntacd28 = 0;
        } else {
            afacd28 = acd28.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            anafacd28 = (afacd28).toFixed(2);
            aqntacd28 = acd28.length;
        }

        let acd29 = clicks.filter((cli, index, array) => cli.day == '29' && cli.property == 'adm');
        let afacd29;
        let anafacd29;
        let aqntacd29;
        if (acd29 == null) {
            anafacd29 = '0.00';
            aqntacd29 = 0;
        } else {
            afacd29 = acd29.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            anafacd29 = (afacd29).toFixed(2);
            aqntacd29 = acd29.length;
        }

        let acd30 = clicks.filter((cli, index, array) => cli.day == '30' && cli.property == 'adm');
        let afacd30;
        let anafacd30;
        let aqntacd30;
        if (acd30 == null) {
            anafacd30 = '0.00';
            aqntacd30 = 0;
        } else {
            afacd30 = acd30.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            anafacd30 = (afacd30).toFixed(2);
            aqntacd30 = acd30.length;
        }

        let acd31 = clicks.filter((cli, index, array) => cli.day == '31' && cli.property == 'adm');
        let afacd31;
        let anafacd31;
        let aqntacd31;
        if (acd31 == null) {
            anafacd31 = '0.00';
            aqntacd31 = 0;
        } else {
            afacd31 = acd31.reduce((prevValue,valueSum) => parseFloat(prevValue) + parseFloat(valueSum.earningsclicks), 0);
            anafacd31 = (afacd31).toFixed(2);
            aqntacd31 = acd31.length;
        }

        let acdays = aqntacd1 + ',' + aqntacd2 + ',' + aqntacd3 + ',' + aqntacd4 + ',' + aqntacd5 + ',' + aqntacd6 + ',' + aqntacd7 + ',' + aqntacd8 + ',' + aqntacd9 + ',' + aqntacd10 + ',' + aqntacd11 + ',' + aqntacd12 + ',' + aqntacd13 + ',' + aqntacd14 + ',' + aqntacd15 + ',' + aqntacd16 + ',' + aqntacd17 + ',' + aqntacd18 + ',' + aqntacd19 + ',' + aqntacd20 + ',' + aqntacd21 + ',' + aqntacd22 + ',' + aqntacd23 + ',' + aqntacd24 + ',' + aqntacd25 + ',' + aqntacd26 + ',' + aqntacd27 + ',' + aqntacd28 + ',' +  aqntacd29 + ',' + aqntacd30 + ',' + aqntacd31;

        res.render('ts', {cdays: cdays, acdays: acdays});
    });
});
