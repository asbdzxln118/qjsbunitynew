/* Generated by SharpKit 5 v5.4.4 */

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];
var Rotate = {
    fullname: "Rotate",
    baseTypeName: "UnityEngine.MonoBehaviour",
    assemblyName: "SharpKitWebApp1",
    Kind: "Class",
    definition: {
        ctor: function (){
            this.speed = 0.1;
            this.mTrans = null;
            this.vec = new UnityEngine.Vector3.ctor$$Single$$Single$$Single(6, 99, 888);
            UnityEngine.MonoBehaviour.ctor.call(this);
        },
        Start: function (){
            UnityEngine.Debug.Log$$Object(this.vec.z);
        },
        Update: function (){
            if (UnityEngine.Object.op_Equality(this.mTrans, null)){
                this.mTrans = this.get_transform();
                this.vec = UnityEngine.Vector3.get_forward();
            }
            this.mTrans.Rotate$$Vector3(UnityEngine.Vector3.op_Multiply$$Vector3$$Single(this.vec, this.speed));
        },
        OnGUI: function (){
            UnityEngine.GUILayout.TextArea$$String$$GUILayoutOption$Array("Click the big cube!");
        }
    }
};
JsTypes.push(Rotate);

