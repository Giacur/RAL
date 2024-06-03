const calculateFunction = (amount, period) => {



    if(amount === null || period === null) {
        return;
    }

    const finalAmount = parseInt(amount);
    const finalPeriod = parseInt(period);

    if(finalAmount <= 28000){
        const irpef = finalAmount * 0.23;
        const salary = finalAmount - irpef;
        const monthlySalary = salary / period;
        const response = {
            irpef: irpef.toFixed(2),
            salary: salary.toFixed(2),
            monthlySalary: +monthlySalary.toFixed(2)
        }
        return response;
    }else if(finalAmount > 28000 && finalAmount <= 50000){
        const irpef = finalAmount * 0.35;
        const salary = finalAmount - irpef;
        const monthlySalary = salary / period;
        const response = {
            irpef: irpef.toFixed(2),
            salary: salary.toFixed(2),
            monthlySalary: +monthlySalary.toFixed(2)
        }
        return response;
    }else if(finalAmount > 50000){
        const irpef = finalAmount * 0.43;
        const salary = finalAmount - irpef;
        const monthlySalary = salary / period;
        const response = {
            irpef: irpef.toFixed(2),
            salary: salary.toFixed(2),
            monthlySalary: +monthlySalary.toFixed(2)
        }
        return response;
    }

}

export default calculateFunction;