let calendar = new Calendar('calendar');
                        calendar.getElement().addEventListener('change', e => {
                            console.log(calendar.value().format('LLL'));
                        });
                
                        let calendar2 = new Calendar('calendar2');
                        calendar2.getElement().addEventListener('change', e => {
                            console.log(calendar2.value().format('LLL'));
                        });