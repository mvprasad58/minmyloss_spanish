var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Transformer = new Schema({
transformador_id:{
 type:Number,
 required:false
},
subestacion:{
    type:String,
    required:false
},
data:[{"2012":[{"1":[{loss_likelihood : {type:Number,required:false},
loss_percentage: {type:Number,required:false},
meter_con_act: {type:Number,required:false},
standard_deviation: {type:Number,required:false},
totalizer_con_act: {type:Number,required:false}}],"2":[{loss_likelihood : {type:Number,required:false},
    loss_percentage: {type:Number,required:false},
    meter_con_act: {type:Number,required:false},
    standard_deviation: {type:Number,required:false},
    totalizer_con_act: {type:Number,required:false}}],"3":[{loss_likelihood : {type:Number,required:false},
        loss_percentage: {type:Number,required:false},
        meter_con_act: {type:Number,required:false},
        standard_deviation: {type:Number,required:false},
        totalizer_con_act: {type:Number,required:false}}],"4":[{loss_likelihood : {type:Number,required:false},
            loss_percentage: {type:Number,required:false},
            meter_con_act: {type:Number,required:false},
            standard_deviation: {type:Number,required:false},
            totalizer_con_act: {type:Number,required:false}}],"5":[{loss_likelihood : {type:Number,required:false},
                loss_percentage: {type:Number,required:false},
                meter_con_act: {type:Number,required:false},
                standard_deviation: {type:Number,required:false},
                totalizer_con_act: {type:Number,required:false}}],"6":[{loss_likelihood : {type:Number,required:false},
                    loss_percentage: {type:Number,required:false},
                    meter_con_act: {type:Number,required:false},
                    standard_deviation: {type:Number,required:false},
                    totalizer_con_act: {type:Number,required:false}}],"7":[{loss_likelihood : {type:Number,required:false},
                        loss_percentage: {type:Number,required:false},
                        meter_con_act: {type:Number,required:false},
                        standard_deviation: {type:Number,required:false},
                        totalizer_con_act: {type:Number,required:false}}],"8":[{loss_likelihood : {type:Number,required:false},
                            loss_percentage: {type:Number,required:false},
                            meter_con_act: {type:Number,required:false},
                            standard_deviation: {type:Number,required:false},
                            totalizer_con_act: {type:Number,required:false}}],"9":[{loss_likelihood : {type:Number,required:false},
                                loss_percentage: {type:Number,required:false},
                                meter_con_act: {type:Number,required:false},
                                standard_deviation: {type:Number,required:false},
                                totalizer_con_act: {type:Number,required:false}}],"10":[{loss_likelihood : {type:Number,required:false},
                                    loss_percentage: {type:Number,required:false},
                                    meter_con_act: {type:Number,required:false},
                                    standard_deviation: {type:Number,required:false},
                                    totalizer_con_act: {type:Number,required:false}}],"11":[{loss_likelihood : {type:Number,required:false},
                                        loss_percentage: {type:Number,required:false},
                                        meter_con_act: {type:Number,required:false},
                                        standard_deviation: {type:Number,required:false},
                                        totalizer_con_act: {type:Number,required:false}}],"12":[{loss_likelihood : {type:Number,required:false},
                                            loss_percentage: {type:Number,required:false},
                                            meter_con_act: {type:Number,required:false},
                                            standard_deviation: {type:Number,required:false},
                                            totalizer_con_act: {type:Number,required:false}}]}]
}]
});
module.exports = mongoose.model('Transformer', Transformer);